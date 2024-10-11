(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1445:function(e,t,r){Promise.resolve().then(r.bind(r,7145))},257:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(4227)},4227:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var o=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?o=n.concat(o):u=-1,o.length&&h())}function h(){if(!c){var e=l(d);c=!0;for(var t=o.length;t;){for(n=o,o=[];++u<t;)n&&n[u].run();u=-1,t=o.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new f(e,t)),1!==o.length||c||l(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var s=n(229);e.exports=s}()},7145:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),s=r(2265);let i=s.forwardRef(function(e,t){let{title:r,titleId:n,...i}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},i),r?s.createElement("title",{id:n},r):null,s.createElement("path",{d:"M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"}))}),a=r(257).env.NEXT_PUBLIC_API_URL||"http://localhost:8000";function l(){let[e,t]=(0,s.useState)(!1),[r,l]=(0,s.useState)(""),[o,c]=(0,s.useState)(null),[u,d]=(0,s.useState)(!1),[h,f]=(0,s.useState)("");(0,s.useEffect)(()=>{t(!0)},[]);let m=async()=>{d(!0),f("");try{let e=await fetch("".concat(a,"/analyze"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r})});if(!e.ok)throw Error("Failed to analyze text");let t=await e.json();c(t)}catch(e){f(e instanceof Error?e.message:"An error occurred")}finally{d(!1)}};return e?(0,n.jsxs)("main",{className:"container mx-auto px-4 py-8",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Interview Analysis Tool"}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("textarea",{className:"w-full h-48 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",value:r,onChange:e=>l(e.target.value),placeholder:"Enter your interview transcript here..."})}),(0,n.jsx)("button",{onClick:m,disabled:u||!r,className:"bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center justify-center disabled:bg-gray-400",children:u?(0,n.jsx)("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{className:"h-5 w-5 mr-2"}),"Analyze Text"]})}),h&&(0,n.jsx)("div",{className:"mt-4 p-4 bg-red-100 text-red-700 rounded-lg",children:h}),o&&(0,n.jsxs)("div",{className:"mt-8",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Analysis Results"}),(0,n.jsx)("div",{className:"overflow-x-auto",children:(0,n.jsxs)("table",{className:"min-w-full bg-white border rounded-lg",children:[(0,n.jsx)("thead",{className:"bg-gray-50",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Variable"}),(0,n.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Value"})]})}),(0,n.jsx)("tbody",{className:"divide-y divide-gray-200",children:Object.entries(o.defined_variables).map(e=>{let[t,r]=e;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:t}),(0,n.jsx)("td",{className:"px-6 py-4 whitespace-normal text-sm text-gray-500",children:"object"==typeof r?JSON.stringify(r):r})]},t)})})]})}),o.additional_insights&&o.additional_insights.length>0&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"Additional Insights"}),(0,n.jsx)("ul",{className:"list-disc pl-5",children:o.additional_insights.map((e,t)=>(0,n.jsx)("li",{className:"text-gray-700 mb-2",children:"object"==typeof e?JSON.stringify(e):e},t))})]})]})]}):null}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=1445)}),_N_E=e.O()}]);