(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4EvU":function(t,n,e){"use strict";e.r(n);e("91GP");var r=e("q1tI"),i=e.n(r),a=e("QQWN"),o=e("vOnD"),c=e("zIjI"),u=e("EYlh"),l=function(t){return i.a.createElement(d,{onClick:function(){return t.callback(t.path)}},i.a.createElement("figure",null,i.a.createElement(u.a,{srcset:t.srcset,alt:t.title,src:t.img}),i.a.createElement("div",{className:"background"}),i.a.createElement("div",{className:"container"},i.a.createElement("span",null,t.title))))},d=o.default.div.withConfig({displayName:"thumbnail__ThumbWrapper",componentId:"x5otlo-0"})(['position:relative;width:100%;padding:0;& figure{width:100%;margin:0;padding:0;overflow:hidden;& img{width:100%;max-width:100%;max-height:100%;display:block;}.background{position:absolute;top:0;width:100%;content:"";background:',";min-height:100%;height:auto;opacity:0;-webkit-transition:0.3s ease-in-out;transition:0.3 ease-in-out;}.container{position:absolute;top:40%;width:100%;& span{width:80%;display:block;position:relative;top:0;height:auto;margin:0 auto;padding:0;color:",";font-weight:bold;font-size:24px;text-transform:uppercase;text-decoration:none;text-align:center;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;opacity:0;}}&:hover{cursor:pointer;& .background{opacity:0.9;}& .container span{opacity:1;}}}"],c.a.yellow,c.a.purple),s=e("Wbzz"),p=e("vrFN"),m=e("UVUI"),f=e.n(m),g=(n.default=function(t){var n=f()(t.pages,(function(t){return t.projects.edges})),e=f()(t.pages,(function(t){return t.order.edges}));if(!n||!e)return null;var r=e.map((function(t){return t.node.workId})),a=n.map((function(t){return t.project})).reduce((function(t,n){var e;return Object.assign({},t,((e={})[n.id]=n,e))}),{});return i.a.createElement(g,{projects:n,list:r,src:a})},function(t){var n=function(t){Object(s.navigate)(t)},e=t.list.map((function(n){return t.src[n]})),r={name:"lavori",content:e.map((function(t){return t.title})).join(", ")};return i.a.createElement(a.b,{isProject:t.projects.length<10},i.a.createElement(p.a,{title:"Home Page",meta:[r]}),e.map((function(t){return i.a.createElement(l,{key:t.id,title:t.title,img:t.thumbnail,path:t.url,srcset:t.thumbset,callback:n})})))})},EYlh:function(t,n,e){"use strict";var r=e("q1tI"),i=e.n(r);e("HEwt"),e("a1Th"),e("rE2o"),e("ioFf"),e("91GP"),e("rGqo"),e("yt8O"),e("Btvt"),e("XfO3"),e("T39b"),e("KKXr");function a(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o="production"==={};e.d(n,"a",(function(){return c}));var c=function(t){var n,e,r=(n=t.srcset,e=function(t){var n=t.split(" ")[0].split(".");return n[n.length-1]},{list:a(new Set(n.map(e))),data:n.reduce((function(t,n,r){var i,o=e(n);return Object.assign({},t,((i={})[o]=t[o]?[].concat(a(t[o]),[n]):[n],i))}),{})}),c=r.data,u=r.list,l=o?"https://peder87.github.io/bettazorza/":"";return i.a.createElement("picture",null,u.map((function(t){return i.a.createElement("source",{key:t,srcSet:c[t].join(", "),type:"image/"+t})})),i.a.createElement("img",{src:""+l+t.src,alt:t.alt}))}},QQWN:function(t,n,e){"use strict";e.d(n,"b",(function(){return p})),e.d(n,"a",(function(){return m}));var r=e("vOnD"),i=e("zIjI");function a(){var t=s(["\n      grid-column: 1/2;\n    "]);return a=function(){return t},t}function o(){var t=s(["\n      grid-column: 1/2;\n    "]);return o=function(){return t},t}function c(){var t=s(["\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(1, 1fr);\n    grid-column-gap: 1rem;\n    grid-row-gap: 1.8rem;\n    /* padding-bottom: 1.8rem; */\n  "]);return c=function(){return t},t}function u(){var t=s(["\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(1, 1fr);\n    grid-column-gap: 2.2rem;\n    grid-row-gap: 2.2rem;\n    padding-bottom: 2.2rem;\n  "]);return u=function(){return t},t}function l(){var t=s(["\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(1, 1fr);\n    grid-column-gap: 2.2rem;\n    grid-row-gap: 2.2rem;\n    padding-bottom: 2.2rem;\n  "]);return l=function(){return t},t}function d(){var t=s(["\n    grid-template-columns: ",";\n    grid-template-rows: repeat(1, 1fr);\n    grid-column-gap: 2.2rem;\n    grid-row-gap: 2.2rem;\n    padding-bottom: 2.2rem;\n  "]);return d=function(){return t},t}function s(t,n){return n||(n=t.slice(0)),t.raw=n,t}var p=r.default.div.withConfig({displayName:"grid__StuffGrid",componentId:"sc-1mrdh5t-0"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:2.2rem;grid-row-gap:2.2rem;padding-bottom:2.2rem;"," "," "," ",""],i.c.xl(d(),(function(t){return t.isProject?"repeat(2,1fr)":"repeat(3,1fr)"})),i.c.lg(l()),i.c.md(u()),i.c.sm(c())),m=r.default.div.withConfig({displayName:"grid__Item",componentId:"sc-1mrdh5t-1"})([""," & img{width:100%;}"],(function(t){return t.full&&Object(r.css)(["grid-column:1/3;"," ",""],i.c.sm(o()),i.c.xs(a()))}))},UVUI:function(t,n,e){"use strict";function r(t,n){try{return n(t)}catch(e){if(e instanceof TypeError){if(i.test(e))return null;if(a.test(e))return}throw e}}var i=/^null | null$|^[^(]* null /i,a=/^undefined | undefined$|^[^(]* undefined /i;r.default=r,t.exports=r}}]);
//# sourceMappingURL=component---src-pages-home-index-js-10db10a96d42622b36a0.js.map