(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{65:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(8),a=n.n(s),o=(n(65),n(31)),i=n(103),l=Object(i.a)({app:{color:"white",textAlign:"center"},header:{backgroundColor:"#282c34",minHeight:"90vh",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"100px",marginBottom:"-100px"},footer:{minHeight:"10vh",opacity:.7,"& a":{color:"white",textDecoration:"none"}}}),u=Object(i.a)({textField:{width:"500px"},input:{paddingBottom:"5px"}}),j=n(110),f=n(107),h=n(55),d=n.n(h),p=n(54),b=n.n(p),O=n(10),x=function(e){var t=e.search,n=e.setSearch,c=e.dropdown,s=e.setDropdown,a=Object(r.useRef)(),o=Object(r.useRef)(),i=u();return Object(O.jsx)(j.a,{label:"Search Countries",className:i.textField,value:t,onChange:function(e){n(e.target.value),!c&&s(!0)},inputRef:a,InputProps:{endAdornment:Object(O.jsx)(f.a,{ref:o,size:"small",onMouseDown:function(e){e.preventDefault(),a.current.focus()},children:c?Object(O.jsx)(b.a,{}):Object(O.jsx)(d.a,{})}),className:i.input},onClick:function(){return s(!c)},onBlur:function(){return s(!1)}})},g=n(108),m=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,118))}));var v=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(o.a)(s,2),i=a[0],u=a[1],j=Object(r.useState)([]),f=Object(o.a)(j,2),h=f[0],d=f[1],p=Object(r.useState)(!1),b=Object(o.a)(p,2),v=b[0],S=b[1];Object(r.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return console.log("oops",e)}))}),[]),Object(r.useEffect)((function(){var e=i.filter((function(e){if(e.name.toLowerCase().includes(n.toLowerCase()))return!0;for(var t=0;e.altSpellings&&t<e.altSpellings.length;t++)if(e.altSpellings[t].toLowerCase().includes(n.toLowerCase()))return!0;return!1}));e.length<1&&(e=[{name:"No results..."}]),d(e)}),[n,i]);var w=l();return Object(O.jsxs)("div",{className:w.app,children:[Object(O.jsxs)("header",{className:w.header,children:[Object(O.jsx)(x,{search:n,setSearch:c,dropdown:v,setDropdown:S}),v?Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(g.a,{size:20,className:w.progress}),children:Object(O.jsx)(m,{countries:h})}):null]}),Object(O.jsxs)("footer",{className:w.footer,children:[Object(O.jsx)("p",{children:"*Search results take into account alternate spellings included in countries API."}),Object(O.jsxs)("p",{children:["**API: ",Object(O.jsx)("a",{href:"https://restcountries.eu/rest/v2/all",target:"_blank",rel:"noreferrer",children:"REST Countries"})," "]})]})]})},S=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,120)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},w=n(109),C=n(56),k=Object(C.a)({palette:{primary:{main:"#ffffff"},type:"dark"}});a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(w.a,{theme:k,children:Object(O.jsx)(v,{})})}),document.getElementById("root")),S()}},[[71,1,2]]]);
//# sourceMappingURL=main.3977d735.chunk.js.map