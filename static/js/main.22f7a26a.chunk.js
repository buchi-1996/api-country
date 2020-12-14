(this["webpackJsonpcountries-api-app"]=this["webpackJsonpcountries-api-app"]||[]).push([[0],{70:function(e,a,t){e.exports=t(91)},75:function(e,a,t){},76:function(e,a,t){},82:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(75),t(117)),s=t(121),i=t(122),u=t(123),m=t(60),p=t.n(m);t(76);var E=function(){return l.a.createElement(o.a,{position:"static",className:"header"},l.a.createElement(s.a,null,l.a.createElement(i.a,{className:"header__nav"},l.a.createElement("h3",null,"Where in the world?"),l.a.createElement(u.a,{className:"night__btn"},l.a.createElement("div",{className:"toggle__mode"},l.a.createElement(p.a,{className:"night__icon"}),"Dark Mode")))))},d=t(22),f=t.n(d),h=t(38),b=t(18),v=t(62),g=t.n(v),_=t(129),N=t(130),O=t(131),j=t(124),x=t(125),y=t(126),w=t(127),C=t(25),k=t(44);t(82);var S=function(e){var a=e.name,t=e.flag,n=e.population,r=e.region,c=e.capital;return l.a.createElement(j.a,{item:!0,xs:12,sm:6,md:4,lg:3},l.a.createElement(C.b,{to:"/details/".concat(a),className:"grid__flex link"},l.a.createElement(x.a,{className:"card__flex"},l.a.createElement(y.a,{style:{height:"200px"},image:t,title:a}),l.a.createElement(w.a,{className:"card__text"},l.a.createElement("h4",null,a),l.a.createElement("p",null,l.a.createElement("label",null,"Population:")," ",l.a.createElement("span",null,l.a.createElement(k.a,{value:n,displayType:"text",thousandSeparator:!0}))),l.a.createElement("p",null,l.a.createElement("label",null,"Region:")," ",l.a.createElement("span",null,r)),l.a.createElement("p",null,l.a.createElement("label",null,"Capital:")," ",l.a.createElement("span",null,c))))))},L=(t(88),t(128)),A=Object(L.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"transparent"}}});var M=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("Filter by region"),o=Object(b.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(""),p=Object(b.a)(m,2),E=p[0],d=p[1],v=A();Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var a,t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all/");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=t.map((function(e){return{name:e.name,flag:e.flag,capital:e.capital,region:e.region,population:e.population,nativeName:e.nativeName,borderCountries:e.borders,languages:e.languages,currencies:e.currencies,subregion:e.subregion,topLevelDomain:e.topLevelDomain,callingCodes:e.callingCodes,alpha3Code:e.alpha3Code}})),r(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x=function(){var e=Object(h.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target.value,u(t),d("");case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),y=t.filter((function(e){return"Filter by region"===s?e.name.toLowerCase().includes(E.toLowerCase()):e.name.toLowerCase().includes(E.toLowerCase())&&e.region.toLowerCase().includes(s.toLowerCase())}));return l.a.createElement("div",null,l.a.createElement(i.a,{maxWidth:"lg",className:"form__row"},l.a.createElement("div",{className:"search__area"},l.a.createElement("div",{className:"search__box1"},l.a.createElement(g.a,{className:"search__icon"}),l.a.createElement("input",{type:"text",onChange:function(e){return d(e.target.value)},className:"search__box",placeholder:"Search for a country..."})),l.a.createElement("div",{className:"search__box2"},l.a.createElement(_.a,{className:v.root},l.a.createElement(N.a,{variant:"outlined",className:"input__select",value:s,onChange:x,MenuProps:{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"}}},l.a.createElement(O.a,{value:"Filter by region"},"Filter by region"),l.a.createElement(O.a,{value:"Africa"},"Africa"),l.a.createElement(O.a,{value:"Americas"},"Americas"),l.a.createElement(O.a,{value:"Asia"},"Asia"),l.a.createElement(O.a,{value:"Europe"},"Europe"),l.a.createElement(O.a,{value:"Oceania"},"Oceania")))))),l.a.createElement(i.a,{maxWidth:"lg"},l.a.createElement(j.a,{container:!0,spacing:3},y.map((function(e,a){return l.a.createElement(S,Object.assign({key:a},e))})))))},I=t(63),W=t.n(I),D=t(10);t(89);var B=function(){var e=Object(D.f)().name,a=Object(n.useState)([]),t=Object(b.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)([]),s=Object(b.a)(o,2),m=s[0],p=s[1],E=Object(n.useState)([]),d=Object(b.a)(E,2),v=d[0],g=d[1],_=Object(n.useState)([]),N=Object(b.a)(_,2),O=N[0],w=N[1];return Object(n.useEffect)((function(){(function(){var a=Object(h.a)(f.a.mark((function a(){var t,n,l,r,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://restcountries.eu/rest/v2/name/".concat(e));case 2:return t=a.sent,a.next=5,t.json();case 5:return n=a.sent,console.log(n[0]),c(n[0]),p(n[0].currencies),g(n[0].languages),"https://restcountries.eu/rest/v2/alpha?codes=",l=n[0].borders.join(";"),a.next=14,fetch("".concat("https://restcountries.eu/rest/v2/alpha?codes=").concat(l));case 14:return r=a.sent,a.next=17,r.json();case 17:o=a.sent,r.ok?w(o):w([]);case 19:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),l.a.createElement(i.a,{maxWidth:"lg"},l.a.createElement(C.b,{to:"/",className:"back__link"},l.a.createElement(u.a,{variant:"contained",color:"secondary",className:"details__btn",startIcon:l.a.createElement(W.a,null)},"Back")),l.a.createElement("div",{className:"description__area"},l.a.createElement(j.a,{container:!0,spacing:3},l.a.createElement(j.a,{item:!0,className:"right-col",xs:12,md:6},l.a.createElement(x.a,{className:"des__card"},l.a.createElement(y.a,{style:{height:"50vh"},title:r.name,image:r.flag,className:"country__flag"}))),l.a.createElement(j.a,{item:!0,className:"left__col",xs:12,md:6},l.a.createElement("h2",null,r.name),l.a.createElement("div",{className:"country__info"},l.a.createElement("div",{className:"country__info__left"},l.a.createElement("p",null,l.a.createElement("label",null,"Native Name:")," ",l.a.createElement("span",null,r.nativeName)),l.a.createElement("p",null,l.a.createElement("label",null,"Population:")," ",l.a.createElement("span",null,l.a.createElement(k.a,{value:r.population,displayType:"text",thousandSeparator:!0}))),l.a.createElement("p",null,l.a.createElement("label",null,"Region:")," ",l.a.createElement("span",null,r.region)),l.a.createElement("p",null,l.a.createElement("label",null,"Sub-Region:")," ",l.a.createElement("span",null,r.region)),l.a.createElement("p",null,l.a.createElement("label",null,"Capital:")," ",l.a.createElement("span",null,r.capital))),l.a.createElement("div",{className:"country__info__right"},l.a.createElement("p",null,l.a.createElement("label",null,"Top Level Domain:")," ",l.a.createElement("span",null,r.topLevelDomain)),l.a.createElement("p",null,l.a.createElement("label",null,"Currencies:")," ",l.a.createElement("span",null,m.map((function(e){return e.name})).join(", "))),l.a.createElement("p",null,l.a.createElement("label",null,"Language:"),"  ",l.a.createElement("span",null,v.map((function(e){return e.name})).join(", "))))),l.a.createElement("div",{className:"border__countries"},l.a.createElement("label",null,"Border Countries:")," ",l.a.createElement("p",null,O.map((function(e,a){return l.a.createElement(C.b,{to:"/details/".concat(e.name),key:a,className:"border__link"},l.a.createElement("span",{className:"border"},e.name))}))))))))};t(90);var F=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C.a,null,l.a.createElement(E,null),l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/details/:name"},l.a.createElement(B,null)),l.a.createElement(D.a,{path:"/"},l.a.createElement(M,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.22f7a26a.chunk.js.map