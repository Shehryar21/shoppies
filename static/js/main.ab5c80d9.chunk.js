(this["webpackJsonpshopify-fe-challenge"]=this["webpackJsonpshopify-fe-challenge"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(21),r=n.n(o),s=(n(70),n(71),n(63)),a=n(51),j=n(43),h=n(62),u=n.n(h),b=n(3),d=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{width:"100px",height:"100px",style:{padding:"20px"},src:e.Poster}),Object(b.jsxs)("div",{style:{paddingBottom:"10px"},children:[e.Title," - ",e.Year]})]})},l=n(124),f=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)([]),r=Object(j.a)(o,2),h=r[0],f=r[1],O=Object(c.useState)([]),m=Object(j.a)(O,2),x=m[0],p=m[1];return Object(b.jsxs)("div",{style:{padding:"20px",backgroundColor:"#f5fffa"},children:[Object(b.jsx)("h1",{children:"Shoppies Movie Nominator"}),Object(b.jsx)(u.a,{value:n,onChange:function(e){return i(e)},onRequestSearch:function(){var e="http://www.omdbapi.com/?s=".concat(n,"&apikey=f939c0a3&type=movie");fetch(e).then((function(e){return e.json()})).then((function(e){e.Search&&f(e.Search)}))}}),Object(b.jsxs)(l.a,{container:!0,spacing:3,children:[Object(b.jsxs)(l.a,{item:!0,xs:12,sm:6,children:[Object(b.jsxs)("h2",{children:["You have searched for: ",n]}),h.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,Object(a.a)({},e)),Object(b.jsx)("button",{onClick:function(){4===x.length&&alert("You have nominated 5 movies. You can not nominate more!!!"),p([].concat(Object(s.a)(x),[e]))},disabled:(t=e.imdbID,x.some((function(e){return e.imdbID===t}))||5===x.length),children:"Nominate"})]});var t}))]}),Object(b.jsxs)(l.a,{item:!0,xs:12,sm:6,children:[Object(b.jsx)("h2",{children:"Nominated"}),x.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,Object(a.a)({},e)),Object(b.jsx)("button",{onClick:function(){return p(x.filter((function(t){return t.imdbID!==e.imdbID})))},children:"Remove"})]})}))]})]})]})};var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),m()},70:function(e,t,n){},71:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.ab5c80d9.chunk.js.map