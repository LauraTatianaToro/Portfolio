(this.webpackJsonplaurawebsite=this.webpackJsonplaurawebsite||[]).push([[0],{27:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){},36:function(e,s,t){},37:function(e,s,t){},38:function(e,s,t){},39:function(e,s,t){},40:function(e,s,t){},42:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(10),i=t.n(a),n=t(3),l=(t(27),t(13)),r=t.n(l),j=t(0);function o(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(s&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("a",{href:"#intro",className:"logo",children:[Object(j.jsx)("span",{children:"<"})," ",Object(j.jsx)(r.a,{}),"/",Object(j.jsx)("span",{children:">"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return t(!s)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}t(34);var d=t(15);function b(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(d.a)(e.current,{showCursor:!0,backSpeed:60,backDelay:1500,strings:["Java","MERN Stack","Artist","Team Player"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/metwo.png",alt:"Photo of me, female. "})})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h1",{children:"Laura Toro"}),Object(j.jsxs)("h3",{children:["Software Developer | ",Object(j.jsx)("span",{ref:e})]}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:"button1 dark",children:Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("span",{children:"Portfolio"})})}),Object(j.jsx)("button",{type:"button",className:"button1 pink",children:Object(j.jsx)("a",{href:"#resume",children:Object(j.jsx)("span",{children:"Resume"})})})]})]})})]})}t(35);function O(e){var s=e.title,t=e.active,c=e.setSelected,a=e.id;return Object(j.jsx)("li",{className:t?"portfolioList active":"portfolioList",onClick:function(){return c(a)},children:s})}t(36);var h=[{id:1,title:"Shape Sorter GUI",img:"assets/shapesorter.png",link:"https://github.com/LauraTatianaToro/EECS3311_Project1_2021"},{id:1,title:"Design Pattern Quiz",img:"assets/designpatternquiz_screenshot.PNG",link:"https://github.com/LauraTatianaToro/DesignPatternQuiz"}],u=[{id:1,title:"Vaccine Scheduler",img:"assets/covidscheduler.png",link:"https://github.com/LauraTatianaToro/appointment-scheduler-webapp"},{id:2,title:"CSS/HTML Online Resume Template",img:"assets/onload_layout.PNG",link:"https://github.com/LauraTatianaToro/online-resume-website-template.git"},{id:3,title:"React App Resume",img:"assets/website_screenshot.PNG",link:"https://github.com/LauraTatianaToro/React-Online-Resume-LauraToro.git"}],m=[{id:1,title:"Client-Server Simulation",img:"assets/cpl.png",link:"https://github.com/LauraTatianaToro/Eecs-3221-Assignment-2.git"},{id:2,title:"Character Counter",img:"assets/cpl.png",link:"https://github.com/LauraTatianaToro/Eecs-3221-Assignment-3.git"},{id:2,title:"Ring of Processes",img:"assets/cpl.png",link:"    https://github.com/LauraTatianaToro/EECS3221-Assignment-1.git"}];function x(){var e=Object(c.useState)("mobile"),s=Object(n.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)([]),l=Object(n.a)(i,2),r=l[0],o=l[1];return Object(c.useEffect)((function(){switch(t){case"java":o(h);break;case"web":o(u);break;case"C":o(m);break;default:o(u)}}),[t]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portfolio "}),Object(j.jsx)("ul",{children:[{id:"java",title:"Java Projects"},{id:"web",title:"Web Projects"},{id:"C",title:"C Projects"}].map((function(e){return Object(j.jsx)(O,{title:e.title,active:t===e.id,setSelected:a,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:r.map((function(e){return Object(j.jsxs)("a",{href:e.link,children:[Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{children:e.title})]})," "]})}))})]})}t(37);var p=t(7),v=t.n(p),N=function(){return Object(j.jsxs)("div",{className:"qualificationContent",children:[Object(j.jsxs)("div",{className:"data",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"qTitle",children:"Hons. BSc., Computer Science"}),Object(j.jsx)("span",{className:"qSubtitle",children:"York University- Toronto, ON"}),Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)(v.a,{}),"2018-2022"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"round"}),Object(j.jsx)("span",{className:"line"})]})]}),Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"round"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"qTitle",children:"Executive Office Administration"}),Object(j.jsx)("span",{className:"qSubtitle",children:"Sheridan College - Brampton, ON"}),Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)(v.a,{}),"2016-2017"]})]})]})]})},f=function(){return Object(j.jsxs)("div",{className:"qualificationContent",children:[Object(j.jsxs)("div",{className:"data",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"qTitle",children:"Fullstack Dev -Contract"}),Object(j.jsx)("span",{className:"qSubtitle",children:"WiSE / ElleHacks - Toronto, ON"}),Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)(v.a,{}),"2021- 2022"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"round"}),Object(j.jsx)("span",{className:"line"})]})]}),Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("div",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"round"}),Object(j.jsx)("span",{className:"line"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"qTitle",children:"Code Mentor"}),Object(j.jsx)("span",{className:"qSubtitle",children:"Canada Learning Code - Toronto, ON"}),Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)(v.a,{}),"2021-Present"]})]})]}),Object(j.jsxs)("div",{className:"data",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"qTitle",children:"Client Relations Associate"}),Object(j.jsx)("span",{className:"qSubtitle",children:"Align Custom Fit - Mississauga, ON"}),Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)(v.a,{}),"2020 - 2021"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"round"})})]})]})},g=t(16),k=t.n(g),C=t(17),T=t.n(C);function S(){var e=Object(c.useState)("Education"),s=Object(n.a)(e,2),t=s[0],a=s[1];return Object(j.jsxs)("div",{className:"resume",id:"resume",children:[Object(j.jsx)("h2",{children:"My Qualifications"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"tabs",children:[Object(j.jsxs)("div",{className:"button",onClick:function(){return a("Education")},children:[Object(j.jsx)(k.a,{}),Object(j.jsx)("span",{children:"Education"})]}),Object(j.jsxs)("div",{className:"button",onClick:function(){return a("Work")},children:[Object(j.jsx)(T.a,{}),Object(j.jsx)("span",{children:"Experience"})]})]}),Object(j.jsxs)("div",{className:"qSection",children:["Education"===t&&Object(j.jsx)(N,{}),"Work"===t&&Object(j.jsx)(f,{})]})]})]})}t(38);var w=t(18),E=t.n(w),P=t(19),L=t.n(P),q=t(20),R=t.n(q),A=t(21),M=t.n(A);function y(){return Object(j.jsxs)("div",{className:"contact",id:"connect",children:[Object(j.jsx)("h1",{children:"Connect with me!"}),Object(j.jsxs)("div",{className:"socialContainer",children:[Object(j.jsx)("a",{href:"https://www.instagram.com/lauratoro.art/?hl=en",children:Object(j.jsx)("div",{className:"socialElement",children:Object(j.jsx)(E.a,{className:"socialImg"})})}),Object(j.jsx)("a",{href:"https://github.com/LauraTatianaToro",children:Object(j.jsx)("div",{className:"socialElement",children:Object(j.jsx)(L.a,{className:"socialImg"})})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/torolaura/",children:Object(j.jsx)("div",{className:"socialElement",children:Object(j.jsx)(R.a,{className:"socialImg"})})}),Object(j.jsx)("a",{href:"mailto:lttoro20@gmail.com",children:Object(j.jsx)("div",{className:"socialElement",children:Object(j.jsx)(M.a,{className:"socialImg"})})})]})]})}t(39),t(40);function I(e){var s=e.menuOpen,t=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(s&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#resume",children:"Resume"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#connect",children:"Connect"})})]})})}var D=function(){var e=Object(c.useState)(!1),s=Object(n.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(!1),l=Object(n.a)(i,2);return l[0],l[1],Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{menuOpen:t,setMenuOpen:a}),Object(j.jsx)(I,{menuOpen:t,setMenuOpen:a}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(b,{}),Object(j.jsx)(x,{}),Object(j.jsx)(S,{}),Object(j.jsx)(y,{})]})]})};i.a.render(Object(j.jsx)(D,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a6a7cd5a.chunk.js.map