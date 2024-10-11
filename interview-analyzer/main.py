from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
import os
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Local development
        "https://userreseearchather.netlify.app/"  # Replace with your Vercel URL
    ],  # Allow your Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranscriptRequest(BaseModel):
    text: str

class InterviewAnalyzer:
    def __init__(self):
        self.api_key = os.environ.get("OPENAI_API_KEY")
        if not self.api_key:
            raise ValueError("OPENAI_API_KEY environment variable is not set")
        self.client = openai.OpenAI(api_key=self.api_key)

    def analyze_transcript(self, transcript: str) -> dict:
        variables_to_capture = [
            "user_pain_points",
            "feature_requests",
            "current_workflow",
            "user_demographics"
        ]
        
        prompt = f"""
        Please analyze this user research interview transcript and extract information for the following variables:
        {', '.join(variables_to_capture)}
        
        Also identify any additional notable user behaviors or insights not covered by these variables.
        
        Transcript:
        {transcript}
        
        Provide the response in the following JSON format:
        {{
            "defined_variables": {{
                "variable_name": "extracted_information"
            }},
            "additional_insights": [
                "insight1",
                "insight2"
            ]
        }}
        """
        
        try:
            response = self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are an expert at analyzing user research interviews."},
                    {"role": "user", "content": prompt}
                ],
                response_format={"type": "json_object"}
            )
            
            return json.loads(response.choices[0].message.content)
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

analyzer = InterviewAnalyzer()

@app.post("/analyze")
async def analyze_text(request: TranscriptRequest):
    try:
        results = analyzer.analyze_transcript(request.text)
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)