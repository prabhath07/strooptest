(this.webpackJsonpstrooptest=this.webpackJsonpstrooptest||[]).push([[0],{25:function(e,t,r){},26:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),o=r(12),c=r.n(o),i=(r(25),r(26),r(13)),a=r(3),x=r(47),w=r(2);var l=function(){return Object(w.jsx)("div",{className:"app1",children:Object(w.jsxs)("div",{className:"card",children:[Object(w.jsx)("p",{className:"title",children:"Stroop Test"}),Object(w.jsx)("div",{className:"but",children:Object(w.jsxs)(i.b,{to:"/test",children:[" ",Object(w.jsx)(x.a,{variant:"outlined",color:"primary",children:"Start"})]})})]})})},T=r(11),u=[{questionText:"RED",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!0},{answerText:"Green",isCorrect:!1}]},{questionText:"BLUE",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!0}]},{questionText:"GREEN",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!0},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"BLUE",answerOptions:[{answerText:"Red",isCorrect:!0},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"GREEN",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!0},{answerText:"Green",isCorrect:!1}]},{questionText:"YELLOW",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!0}]},{questionText:"BLUE",answerOptions:[{answerText:"Red",isCorrect:!0},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"GREEN",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!0},{answerText:"Green",isCorrect:!1}]},{questionText:"YELLOW",answerOptions:[{answerText:"Red",isCorrect:!0},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"RED",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!0},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"GREEN",answerOptions:[{answerText:"Red",isCorrect:!0},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"YELLOW",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!0}]},{questionText:"RED",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!0},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]},{questionText:"BLUE",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!0}]},{questionText:"GREEN",answerOptions:[{answerText:"Red",isCorrect:!1},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!0},{answerText:"Green",isCorrect:!1}]},{questionText:"RED",answerOptions:[{answerText:"Red",isCorrect:!0},{answerText:"Blue",isCorrect:!1},{answerText:"Yellow",isCorrect:!1},{answerText:"Green",isCorrect:!1}]}];r(33);var C=function(){localStorage.clear(),Object(a.e)();var e=u,t=Object(s.useState)("yellow"),r=Object(T.a)(t,2),n=r[0],o=r[1],c=Object(s.useState)(0),l=Object(T.a)(c,2),C=l[0],j=l[1],O=Object(s.useState)(!1),d=Object(T.a)(O,2),b=d[0],p=d[1],h=Object(s.useState)(0),m=Object(T.a)(h,2),R=m[0],E=m[1],B=Object(s.useState)(30),G=Object(T.a)(B,2),f=G[0],q=G[1],Y=Object(s.useState)(0),v=Object(T.a)(Y,2),g=(v[0],v[1],function(t){t&&E(R+1);var r=C+1;r<e.length?(e[C+1].answerOptions.map((function(e){if(1==e.isCorrect)return o(e.answerText.toLowerCase()),e.answerText.toLowerCase()})),j(r)):p(!0)});return Object(s.useEffect)((function(){localStorage.getItem("home")||f>0&&setTimeout((function(){return q(f-1)}),1e3)}),[f]),Object(w.jsx)("div",{className:"app",children:b||!f?Object(w.jsxs)("div",{className:"score-section",children:[Object(w.jsxs)("span",{children:["You scored ",R," out of ",e.length]}),localStorage.setItem("home",1),Object(w.jsxs)(i.b,{to:"/",children:[Object(w.jsx)("br",{})," ",Object(w.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){localStorage.removeItem("home")},children:"Home"})]})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"question-section",children:[Object(w.jsxs)("div",{className:"question-count",children:[Object(w.jsxs)("span",{children:["Question ",C+1]}),"/",e.length,Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)("span",{children:["Timer : ",f]})]}),Object(w.jsx)("div",{className:"question-text",style:{color:n},children:e[C].questionText})]}),Object(w.jsx)("div",{className:"answer-section",children:e[C].answerOptions.map((function(e){return Object(w.jsxs)("button",{onClick:function(){g(e.isCorrect)},children:[" ",e.answerText]})}))})]})})};var j=function(){return Object(w.jsxs)(i.a,{children:[Object(w.jsx)(a.a,{exact:!0,path:"/",children:Object(w.jsx)(l,{})}),Object(w.jsx)(a.a,{exact:!0,path:"/test",children:Object(w.jsx)(C,{})})]})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,48)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),o(e),c(e)}))};c.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(j,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.1ac0ab95.chunk.js.map