"use strict";(self.webpackChunkiec_61499_curriculum=self.webpackChunkiec_61499_curriculum||[]).push([[159],{1953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=r(4848),s=r(8453),i=r(6540);function o(e){let{questions:t}=e;const[r,s]=(0,i.useState)(Array(t.length).fill(null)),[o,a]=(0,i.useState)(!1),[c,l]=(0,i.useState)(0);return(0,n.jsxs)("div",{className:"quiz",children:[t.map(((e,i)=>(0,n.jsxs)("div",{className:"question-section",children:[(0,n.jsxs)("div",{className:"question-count",children:[(0,n.jsxs)("span",{children:["Question ",i+1]}),"/",t.length]}),(0,n.jsx)("div",{className:"question-text",children:e.questionText}),(0,n.jsx)("div",{className:"answer-section",children:e.answerOptions.map(((e,o)=>(0,n.jsx)("button",{onClick:()=>((e,n,i)=>{const o=[...r];o[e]={isCorrect:n,selectedAnswerIndex:i,correctAnswerIndex:t[e].answerOptions.findIndex((e=>e.isCorrect))},s(o),n&&l(c+1)})(i,e.isCorrect,o),disabled:null!==r[i],className:r[i]?o===r[i].selectedAnswerIndex?r[i].isCorrect?"correct":"incorrect":o===r[i].correctAnswerIndex?"correct":"":"",children:e.answerText},o)))})]},i))),!o&&(0,n.jsx)("button",{onClick:()=>{a(!0)},children:"Show Results"}),o&&(0,n.jsxs)("div",{className:"score-section",children:["You scored ",c," out of ",t.length]})]})}const a=JSON.parse('[{"questionText":"In which century did the Industrial Revolution begin?","answerOptions":[{"answerText":"16th century","isCorrect":false},{"answerText":"17th century","isCorrect":false},{"answerText":"18th century","isCorrect":true},{"answerText":"19th century","isCorrect":false}]},{"questionText":"What was a key technological innovation of the First Industrial Revolution?","answerOptions":[{"answerText":"Internet","isCorrect":false},{"answerText":"Steam Engine","isCorrect":true},{"answerText":"Smartphone","isCorrect":false},{"answerText":"Artificial Intelligence","isCorrect":false}]},{"questionText":"Which of the following was a characteristic of the Second Industrial Revolution?","answerOptions":[{"answerText":"Use of handcrafts","isCorrect":false},{"answerText":"Mass production","isCorrect":true},{"answerText":"Agrarian societies","isCorrect":false},{"answerText":"Horse-drawn carriages","isCorrect":false}]},{"questionText":"What marked the beginning of the Third Industrial Revolution?","answerOptions":[{"answerText":"The invention of the steam engine","isCorrect":false},{"answerText":"The shift from analog to digital technology","isCorrect":true},{"answerText":"The discovery of electricity","isCorrect":false},{"answerText":"The development of the internal combustion engine","isCorrect":false}]},{"questionText":"The Fourth Industrial Revolution is distinguished by the fusion of technologies in what spheres?","answerOptions":[{"answerText":"Physical and Mechanical","isCorrect":false},{"answerText":"Biological and Chemical","isCorrect":false},{"answerText":"Digital, Physical, and Biological","isCorrect":true},{"answerText":"Electrical and Thermal","isCorrect":false}]},{"questionText":"What is the most common programming language for PLCs that resembles relay logic?","answerOptions":[{"answerText":"Python","isCorrect":false},{"answerText":"Ladder Logic","isCorrect":true},{"answerText":"C++","isCorrect":false},{"answerText":"JavaScript","isCorrect":false}]},{"questionText":"Which technology greatly influenced the transition from relay programming to computer programming in industrial automation?","answerOptions":[{"answerText":"Typewriter","isCorrect":false},{"answerText":"Microprocessor","isCorrect":true},{"answerText":"Telegraph","isCorrect":false},{"answerText":"Abacus","isCorrect":false}]},{"questionText":"What feature of modern PLCs significantly enhances their capability for handling complex industrial processes compared to early PLCs?","answerOptions":[{"answerText":"Manual control mechanisms","isCorrect":false},{"answerText":"Integrated networking and communication","isCorrect":true},{"answerText":"Basic binary operations","isCorrect":false},{"answerText":"Fixed mechanical parts","isCorrect":false}]},{"questionText":"Which invention was a significant advancement in communication during the Third Industrial Revolution?","answerOptions":[{"answerText":"Printing press","isCorrect":false},{"answerText":"Telegraph","isCorrect":false},{"answerText":"Telephone","isCorrect":true},{"answerText":"Radio","isCorrect":false}]},{"questionText":"What technology is a hallmark of Industry 4.0, enabling interconnected and intelligent industrial systems?","answerOptions":[{"answerText":"Internet of Things (IoT)","isCorrect":true},{"answerText":"Steam power","isCorrect":false},{"answerText":"Water wheel","isCorrect":false},{"answerText":"Solar panels","isCorrect":false}]}]'),c={description:"Create a doc page with rich content."},l="Industrial Revolution Quiz",u={id:"Module1/quiz",title:"Industrial Revolution Quiz",description:"Create a doc page with rich content.",source:"@site/docs/Module1/quiz.md",sourceDirName:"Module1",slug:"/Module1/quiz",permalink:"/IEC61499-Curriculum/docs/Module1/quiz",draft:!1,unlisted:!1,editUrl:"https://github.com/AIC3Lab/IEC61499-Curriculum/docs/Module1/quiz.md",tags:[],version:"current",frontMatter:{description:"Create a doc page with rich content."},sidebar:"tutorialSidebar",previous:{title:"Presentation",permalink:"/IEC61499-Curriculum/docs/Module1/presentation"},next:{title:"Module 2",permalink:"/IEC61499-Curriculum/docs/category/module-2"}},d={},h=[];function x(e){const t={h1:"h1",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"industrial-revolution-quiz",children:"Industrial Revolution Quiz"}),"\n","\n",(0,n.jsx)(o,{questions:a,children:" IEC61499 quiz"})]})}function w(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);