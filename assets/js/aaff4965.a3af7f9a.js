"use strict";(self.webpackChunkiec_61499_curriculum=self.webpackChunkiec_61499_curriculum||[]).push([[159],{2106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(4848),n=r(8453),i=r(445);const o=JSON.parse('[{"questionText":"In which century did the Industrial Revolution begin?","answerOptions":[{"answerText":"16th century","isCorrect":false},{"answerText":"17th century","isCorrect":false},{"answerText":"18th century","isCorrect":true},{"answerText":"19th century","isCorrect":false}]},{"questionText":"What was a key technological innovation of the First Industrial Revolution?","answerOptions":[{"answerText":"Internet","isCorrect":false},{"answerText":"Steam Engine","isCorrect":true},{"answerText":"Smartphone","isCorrect":false},{"answerText":"Artificial Intelligence","isCorrect":false}]},{"questionText":"Which of the following was a characteristic of the Second Industrial Revolution?","answerOptions":[{"answerText":"Use of handcrafts","isCorrect":false},{"answerText":"Mass production","isCorrect":true},{"answerText":"Agrarian societies","isCorrect":false},{"answerText":"Horse-drawn carriages","isCorrect":false}]},{"questionText":"What marked the beginning of the Third Industrial Revolution?","answerOptions":[{"answerText":"The invention of the steam engine","isCorrect":false},{"answerText":"The shift from analog to digital technology","isCorrect":true},{"answerText":"The discovery of electricity","isCorrect":false},{"answerText":"The development of the internal combustion engine","isCorrect":false}]},{"questionText":"The Fourth Industrial Revolution is distinguished by the fusion of technologies in what spheres?","answerOptions":[{"answerText":"Physical and Mechanical","isCorrect":false},{"answerText":"Biological and Chemical","isCorrect":false},{"answerText":"Digital, Physical, and Biological","isCorrect":true},{"answerText":"Electrical and Thermal","isCorrect":false}]},{"questionText":"What is the most common programming language for PLCs that resembles relay logic?","answerOptions":[{"answerText":"Python","isCorrect":false},{"answerText":"Ladder Logic","isCorrect":true},{"answerText":"C++","isCorrect":false},{"answerText":"JavaScript","isCorrect":false}]},{"questionText":"Which technology greatly influenced the transition from relay programming to computer programming in industrial automation?","answerOptions":[{"answerText":"Typewriter","isCorrect":false},{"answerText":"Microprocessor","isCorrect":true},{"answerText":"Telegraph","isCorrect":false},{"answerText":"Abacus","isCorrect":false}]},{"questionText":"What feature of modern PLCs significantly enhances their capability for handling complex industrial processes compared to early PLCs?","answerOptions":[{"answerText":"Manual control mechanisms","isCorrect":false},{"answerText":"Integrated networking and communication","isCorrect":true},{"answerText":"Basic binary operations","isCorrect":false},{"answerText":"Fixed mechanical parts","isCorrect":false}]},{"questionText":"Which invention was a significant advancement in communication during the Third Industrial Revolution?","answerOptions":[{"answerText":"Printing press","isCorrect":false},{"answerText":"Telegraph","isCorrect":false},{"answerText":"Telephone","isCorrect":true},{"answerText":"Radio","isCorrect":false}]},{"questionText":"What technology is a hallmark of Industry 4.0, enabling interconnected and intelligent industrial systems?","answerOptions":[{"answerText":"Internet of Things (IoT)","isCorrect":true},{"answerText":"Steam power","isCorrect":false},{"answerText":"Water wheel","isCorrect":false},{"answerText":"Solar panels","isCorrect":false}]}]'),a={sidebar_position:2},c="Industrial Revolution Quiz",l={id:"Module1/quiz",title:"Industrial Revolution Quiz",description:"",source:"@site/docs/Module1/quiz.md",sourceDirName:"Module1",slug:"/Module1/quiz",permalink:"/IEC61499-Curriculum/docs/Module1/quiz",draft:!1,unlisted:!1,editUrl:"https://github.com/AIC3Lab/IEC61499-Curriculum/docs/Module1/quiz.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Software for industrial automation",permalink:"/IEC61499-Curriculum/docs/Module1/pptx"},next:{title:"TBD",permalink:"/IEC61499-Curriculum/docs/Module1/video"}},u={},d=[];function h(e){const t={h1:"h1",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"industrial-revolution-quiz",children:"Industrial Revolution Quiz"}),"\n","\n",(0,s.jsx)(i.A,{questions:o})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},445:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(6540),n=r(4848);function i(e){let{questions:t}=e;const[r,i]=(0,s.useState)(Array(t.length).fill(null)),[o,a]=(0,s.useState)(!1),[c,l]=(0,s.useState)(0);return(0,n.jsxs)("div",{className:"quiz",children:[t.map(((e,s)=>(0,n.jsxs)("div",{className:"question-section",children:[(0,n.jsxs)("div",{className:"question-count",children:[(0,n.jsxs)("span",{children:["Question ",s+1]}),"/",t.length]}),(0,n.jsx)("div",{className:"question-text",children:e.questionText}),(0,n.jsx)("div",{className:"answer-section",children:e.answerOptions.map(((e,o)=>(0,n.jsx)("button",{onClick:()=>((e,s,n)=>{const o=[...r];o[e]={isCorrect:s,selectedAnswerIndex:n,correctAnswerIndex:t[e].answerOptions.findIndex((e=>e.isCorrect))},i(o),s&&l(c+1)})(s,e.isCorrect,o),disabled:null!==r[s],className:r[s]?o===r[s].selectedAnswerIndex?r[s].isCorrect?"correct":"incorrect":o===r[s].correctAnswerIndex?"correct":"":"",children:e.answerText},o)))})]},s))),!o&&(0,n.jsx)("button",{onClick:()=>{a(!0)},children:"Show Results"}),o&&(0,n.jsxs)("div",{className:"score-section",children:["You scored ",c," out of ",t.length]})]})}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(6540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);