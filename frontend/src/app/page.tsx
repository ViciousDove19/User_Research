// app/page.tsx
'use client';


import { useState } from 'react';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface AnalysisResults {
  defined_variables: Record<string, string>;
  additional_insights: string[];
}

export default function Home() {
  const [text, setText] = useState('');
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze text');
      }
      
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Interview Analysis Tool</h1>
      
      <div className="mb-6">
        <textarea
          className="w-full h-48 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your interview transcript here..."
        />
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={loading || !text}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center justify-center disabled:bg-gray-400"
      >
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
        ) : (
          <>
            <ArrowUpOnSquareIcon className="h-5 w-5 mr-2" />
            Analyze Text
          </>
        )}
      </button>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      {results && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variable</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(results.defined_variables).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {key}
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                      {typeof value === 'object' ? JSON.stringify(value) : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {results.additional_insights && results.additional_insights.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Additional Insights</h3>
              <ul className="list-disc pl-5">
                {results.additional_insights.map((insight, index) => (
                  <li key={index} className="text-gray-700 mb-2">
                    {typeof insight === 'object' ? JSON.stringify(insight) : insight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </main>
  );
}