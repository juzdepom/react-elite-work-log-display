(this["webpackJsonpreact-elite-work-log-display"]=this["webpackJsonpreact-elite-work-log-display"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),i=n(30),r=n.n(i),j=n(32);var a=n(31),o=n.n(a),l=n(0),d=new o.a({apiKey:"key9YOWPfufxQsX9x"}).base("appK6UP7c61WkknOL");var b=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){d("entries").select({view:"Grid view"}).eachPage((function(e,t){s(e),t()}))}),[]);var i=function(e){if(e.length>0){var t=0;e.forEach((function(e){t+=e.fields.minutes}));var n=t%60;return"".concat(t/60," hours ").concat(n," min")}}(n);return Object(l.jsxs)("div",{style:{textAlign:"center",fontFamily:"'Roboto', sans-serif"},children:[Object(l.jsx)("h1",{children:"ELITEWEB.Co Work Log"}),Object(l.jsxs)("p",{children:["Total time worked: ",i,Object(l.jsx)("br",{})]}),Object(l.jsx)("h3",{children:"All Entries"}),n.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:["\ud83d\uddd3",e.fields.date," "]}),Object(l.jsxs)("span",{children:["\ud83d\udd50",e.fields.minutes," min \u2013 "]}),Object(l.jsx)("span",{children:Object(l.jsxs)("i",{children:["#",e.fields.tag]})}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{children:e.fields.description})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]},t)}))]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))},94:function(e,t){},95:function(e,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.51ff0c72.chunk.js.map