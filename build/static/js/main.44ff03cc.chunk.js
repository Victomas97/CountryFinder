(this["webpackJsonpcode-competition"]=this["webpackJsonpcode-competition"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),o=n(4),s=n.n(o),i=(n(10),n(3)),u=(n(11),function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),u=s[0],l=s[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"gj",children:Object(c.jsx)("input",{value:n,onChange:function(t){var e;r(t.target.value),t.target.value.replaceAll(" ","")?(e=t.target.value,fetch("https://restcountries.eu/rest/v2/name/"+e).then((function(t){return t.json()})).then((function(t){return t.message?[]:t})).catch((function(t){return console.log(t)}))).then((function(t){l(t),console.log(t)})):l([])}})}),u.length>0?u.map((function(t,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:[" ",t.name+" - "+t.capital," "]}),Object(c.jsx)("img",{src:t.flag,alt:"flag",width:"250px"})]})})):Object(c.jsx)(c.Fragment,{children:" No hay datos que mostrar"})]})}),l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),l()}},[[12,1,2]]]);
//# sourceMappingURL=main.44ff03cc.chunk.js.map