(this["webpackJsonpreact-lab"]=this["webpackJsonpreact-lab"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(24),a(1)),u=function(e){var t=e.changeScreen;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"welcome-screen"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"Press the button to get started! "),r.a.createElement("button",{className:"welcome-button",onClick:t},"Get Started")))},i=(a(25),a(2)),s=a.n(i),m=a(5),p=a(4),v=a.n(p),f=function(e){var t=e.changeScreen,a=e.setFavoritePeople,c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],i=l[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),d=f[0],E=f[1],b=Object(n.useState)([]),h=Object(o.a)(b,2),j=h[0],k=h[1],w=Object(n.useState)(""),O=Object(o.a)(w,2),C=O[0],g=O[1],S=Object(n.useState)([]),y=Object(o.a)(S,2),L=y[0],N=y[1];Object(n.useEffect)((function(){var e=!0;return E(!0),function(){var t=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.delegateYield(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://swapi.dev/api/people/");case 2:if(a=t.sent,e){t.next=5;break}return t.abrupt("return",{v:void 0});case 5:k(a.data.results),N(a.data.results),n=2;case 8:if(null===a.data.next){t.next=19;break}return t.next=11,v()("https://swapi.dev/api/people/?page=".concat(n));case 11:if(a=t.sent,e){t.next=14;break}return t.abrupt("return",{v:void 0});case 14:k((function(e){return e.concat(a.data.results)})),N((function(e){return e.concat(a.data.results)})),n++,t.next=8;break;case 19:case"end":return t.stop()}}),t)}))(),"t0",2);case 2:if("object"!==typeof(a=t.t0)){t.next=5;break}return t.abrupt("return",a.v);case 5:t.next=11;break;case 7:t.prev=7,t.t1=t.catch(0),i(t.t1),console.log(t.t1);case 11:E(!1);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]);var x=L.map((function(e,n){return r.a.createElement("div",{className:"card",key:e.name+n,onClick:function(){t(e)}},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Birth year: ",e.birth_year),r.a.createElement("p",null,"Eye color: ",e.eye_color),r.a.createElement("p",null,"Hair color: ",e.hair_color),r.a.createElement("button",{onClick:function(t){return function(e,t){e.stopPropagation(),a(t)}(t,e)}},"Add to favorites"))}));return u?r.a.createElement("div",null,u):!0===d?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"list-component"},r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, birth year or skin color",onChange:function(e){var t=j.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.skin_color.toLowerCase().includes(e.target.value.toLowerCase())||t.hair_color.toLowerCase().includes(e.target.value.toLowerCase())}));N(t),g(e.target.value)},value:C})),r.a.createElement("h2",null,"All People"),r.a.createElement("div",{className:"gallery"},x))},d=a(6),E=function(e){var t=e.changeScreen,a=e.favoritePeople,c=e.favoritePlanets,l=e.setFavoritePeople,u=e.setFavoritePlanets,i=Object(n.useState)(null),s=Object(o.a)(i,2),m=s[0],p=(s[1],Object(n.useState)(!1)),v=Object(o.a)(p,2),f=v[0],E=(v[1],Object(n.useState)("all")),b=Object(o.a)(E,2),h=b[0],j=b[1],k=Object(n.useState)([]),w=Object(o.a)(k,2),O=w[0],C=w[1],g=Object(n.useState)([]),S=Object(o.a)(g,2),y=S[0],L=S[1],N=Object(n.useState)([]),x=Object(o.a)(N,2),P=x[0],_=x[1],F=Object(n.useState)([]),A=Object(o.a)(F,2),B=A[0],Y=A[1],H=Object(n.useState)(""),M=Object(o.a)(H,2),R=M[0],T=M[1];console.log(c),console.log(P),Object(n.useEffect)((function(){C.apply(void 0,Object(d.a)(O).concat([a])),L.apply(void 0,Object(d.a)(y).concat([c])),_([].concat(Object(d.a)(a),Object(d.a)(c))),Y([].concat(Object(d.a)(a),Object(d.a)(c)))}),[]);var W=function(e){t(e)},G=function(e,t){e.stopPropagation();var n=a.filter((function(e){return e.name!==t.name}));C(n),l(n)},J=function(e,t){e.stopPropagation();var a=c.filter((function(e){return e.name!==t.name}));u(a),L(a)},I=O.map((function(e,t){return r.a.createElement("div",{className:"card",key:e.name,onClick:function(){return W(e)}},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Birth year: ",e.birth_year),r.a.createElement("p",null,"Eye color: ",e.eye_color),r.a.createElement("p",null,"Hair color: ",e.hair_color),r.a.createElement("button",{onClick:function(t){return G(t,e)}},"Remove from favorites"))})),$=y.map((function(e){return r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Population: ",e.population),r.a.createElement("button",{onClick:function(t){return J(t,e)}},"Remove from favorites"))})),q=B.map((function(e){return e.terrain?r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Population: ",e.population),r.a.createElement("button",{onClick:function(t){return J(t,e)}},"Remove from favorites")):r.a.createElement("div",{className:"card",key:e.name,onClick:function(){return W(e)}},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Birth year: ",e.birth_year),r.a.createElement("p",null,"Eye color: ",e.eye_color),r.a.createElement("p",null,"Hair color: ",e.hair_color),r.a.createElement("button",{onClick:function(t){return G(t,e)}},"Remove from favorites"))}));return m?r.a.createElement("div",{className:"list-component"},m):!0===f?r.a.createElement("div",{className:"loader"}):0===a.length&&0===c.length?r.a.createElement("div",{className:"list-component"},r.a.createElement("h1",null,"You currently have no favorites")):"people"===h?r.a.createElement("div",{className:"list-component"},r.a.createElement("button",{onClick:function(){return j("all")}},"List all"),r.a.createElement("button",{onClick:function(){return j("people")}},"List people"),r.a.createElement("button",{onClick:function(){return j("planets")}},"List planets"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, birth year or skin color",onChange:function(e){var t=a.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.skin_color.toLowerCase().includes(e.target.value.toLowerCase())||t.hair_color.toLowerCase().includes(e.target.value.toLowerCase())}));C(t),T(e.target.value)},value:R})),r.a.createElement("h1",null,"Your favorite"),r.a.createElement("div",null,r.a.createElement("h2",null,"People"),r.a.createElement("div",{className:"gallery"},I))):"planets"===h?r.a.createElement("div",{className:"list-component"},r.a.createElement("button",{onClick:function(){return j("all")}},"List all"),r.a.createElement("button",{onClick:function(){return j("people")}},"List people"),r.a.createElement("button",{onClick:function(){return j("planets")}},"List planets"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, terrain or climate",onChange:function(e){var t=c.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.terrain.toLowerCase().includes(e.target.value.toLowerCase())||t.climate.toLowerCase().includes(e.target.value.toLowerCase())}));L(t),T(e.target.value)},value:R})),r.a.createElement("h1",null,"Your favorites"),r.a.createElement("div",null,r.a.createElement("h2",null,"Planets"),r.a.createElement("div",{className:"gallery"},$))):"all"===h?r.a.createElement("div",{className:"list-component"},r.a.createElement("button",{onClick:function(){return j("all")}},"List all"),r.a.createElement("button",{onClick:function(){return j("people")}},"List people"),r.a.createElement("button",{onClick:function(){return j("planets")}},"List planets"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, birth year or skin color",onChange:function(e){var t=P.filter((function(t){return console.log(t),t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.skin_color.toLowerCase().includes(e.target.value.toLowerCase())||t.hair_color.toLowerCase().includes(e.target.value.toLowerCase())||t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.terrain.toLowerCase().includes(e.target.value.toLowerCase())||t.climate.toLowerCase().includes(e.target.value.toLowerCase())}));_(t),T(e.target.value)},value:R})),r.a.createElement("h1",null,"Your favorites"),r.a.createElement("div",null,r.a.createElement("h2",null,"People & Planets"),r.a.createElement("div",{className:"gallery"},q))):void 0},b=function(e){var t=e.setFavoritePlanets,a=Object(n.useState)(null),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(!1),p=Object(o.a)(i,2),f=p[0],d=p[1],E=Object(n.useState)([]),b=Object(o.a)(E,2),h=b[0],j=b[1],k=Object(n.useState)(""),w=Object(o.a)(k,2),O=w[0],C=w[1],g=Object(n.useState)([]),S=Object(o.a)(g,2),y=S[0],L=S[1];Object(n.useEffect)((function(){var e=!0;return d(!0),function(){var t=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.delegateYield(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://swapi.dev/api/planets/");case 2:if(a=t.sent,e){t.next=5;break}return t.abrupt("return",{v:void 0});case 5:j(a.data.results),L(a.data.results),n=2;case 8:if(null===a.data.next){t.next=19;break}return t.next=11,v()("https://swapi.dev/api/people/?page=".concat(n));case 11:if(a=t.sent,e){t.next=14;break}return t.abrupt("return",{v:void 0});case 14:j((function(e){return e.concat(a.data.results)})),L((function(e){return e.concat(a.data.results)})),n++,t.next=8;break;case 19:case"end":return t.stop()}}),t)}))(),"t0",2);case 2:if("object"!==typeof(a=t.t0)){t.next=5;break}return t.abrupt("return",a.v);case 5:t.next=10;break;case 7:t.prev=7,t.t1=t.catch(0),u(t.t1);case 10:d(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]);var N=y.map((function(e,a){return r.a.createElement("div",{className:"card",key:e.name+a,onClick:function(){}},r.a.createElement("section",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Population: ",e.population)),r.a.createElement("button",{onClick:function(a){return n=e,a.stopPropagation(),void t(n);var n}},"Add to favorites"))}));return l?r.a.createElement("div",null,l):!0===f?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"list-component"},r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, climate or terrain",onChange:function(e){var t=h.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.terrain.toLowerCase().includes(e.target.value.toLowerCase())||t.climate.toLowerCase().includes(e.target.value.toLowerCase())}));L(t),C(e.target.value)},value:O})),r.a.createElement("h2",null,"All Planets"),r.a.createElement("div",{className:"gallery"},N))},h=function(e){var t=e.person,a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(),p=Object(o.a)(i,2),f=p[0],d=p[1],E=Object(n.useState)(null),b=Object(o.a)(E,2),h=b[0],j=b[1],k=Object(n.useState)([]),w=Object(o.a)(k,2),O=w[0],C=w[1];Object(n.useEffect)((function(){var e=!0;return u(!0),function(){var a=Object(m.a)(s.a.mark((function a(){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,v()(t.homeworld);case 3:if(n=a.sent,e){a.next=6;break}return a.abrupt("return");case 6:j(n.data.name),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),d(a.t0),console.log(f);case 13:u(!1);case 14:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}()(),function(){e=!1}}),[]),Object(n.useEffect)((function(){var e=!0;return function(){var a=Object(m.a)(s.a.mark((function a(){var n,r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,n=s.a.mark((function a(n){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v()(t.films[n]);case 2:if(r=a.sent,e){a.next=5;break}return a.abrupt("return",{v:void 0});case 5:C((function(e){return e.concat(r.data.title)}));case 6:case"end":return a.stop()}}),a)})),r=0;case 3:if(!(r<t.films.length)){a.next=11;break}return a.delegateYield(n(r),"t0",5);case 5:if("object"!==typeof(c=a.t0)){a.next=8;break}return a.abrupt("return",c.v);case 8:r++,a.next=3;break;case 11:a.next=16;break;case 13:a.prev=13,a.t1=a.catch(0),d(a.t1);case 16:u(!1);case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(){return a.apply(this,arguments)}}()(),function(){e=!1}}),[]);var g=O.map((function(e){return r.a.createElement("p",{key:e},e)}));return f?r.a.createElement("div",null,f):!0===l?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"detailed-card"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"detailed-grid"},r.a.createElement("div",null,"Birth year: ",r.a.createElement("p",null,t.birth_year)),r.a.createElement("div",null,"Height: ",r.a.createElement("p",null,t.height)),r.a.createElement("div",null,"Hair color: ",r.a.createElement("p",null,t.hair_color)),r.a.createElement("div",null,"Eye color: ",r.a.createElement("p",null,t.eye_color)),r.a.createElement("div",null,"Skin color: ",r.a.createElement("p",null,t.skin_color)),r.a.createElement("div",null,"Gender: ",r.a.createElement("p",null,t.gender)),r.a.createElement("div",null,"Mass: ",r.a.createElement("p",null,t.mass)),r.a.createElement("div",null,"Homeworld: ",r.a.createElement("p",null,h)),r.a.createElement("div",null,"Movies: ",r.a.createElement("div",null,g))))},j=function(e){e.setFavoritePeople;var t,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),m=s[0],p=s[1],v="";return m&&(v=isNaN(t-0)?"invalid":"valid"),r.a.createElement("div",{className:"detailed-card"},r.a.createElement("p",null,"Please enter a number: ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:l,className:v,onChange:function(e){return u(e.target.value)},onBlur:function(e){return p(!0)}})," ",r.a.createElement("br",null)),r.a.createElement("button",null,"Submit"))};var k=function(){var e=Object(n.useState)("peopleScreen"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)([]),v=Object(o.a)(p,2),d=v[0],k=v[1],w=Object(n.useState)([]),O=Object(o.a)(w,2),C=O[0],g=O[1],S=null;switch(a){case"welcomeScreen":S=r.a.createElement(u,{changeScreen:function(){return c("peopleScreen")}});break;case"peopleScreen":S=r.a.createElement(f,{changeScreen:function(e){c("detailedScreen"),m(e)},setFavoritePeople:function(e){k((function(t){return t.concat(e)}))}});break;case"favoriteScreen":S=r.a.createElement(E,{changeScreen:function(e){c("detailedScreen"),m(e)},favoritePeople:d,favoritePlanets:C,setFavoritePeople:function(e){k(e)},setFavoritePlanets:function(e){g(e)}});break;case"planetScreen":S=r.a.createElement(b,{setFavoritePlanets:function(e){g((function(t){return t.concat(e)}))}});break;case"detailedScreen":S=r.a.createElement(h,{person:s});break;case"createScreen":S=r.a.createElement(j,{setFavoritePeople:function(e){k((function(t){return t.concat(e)}))}})}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("button",{onClick:function(){return c("favoriteScreen")}},"My favorites"),r.a.createElement("button",{onClick:function(){return c("peopleScreen")}},"List people "),r.a.createElement("button",{onClick:function(){return c("planetScreen")}},"List planets "),r.a.createElement("button",{onClick:function(){return c("createScreen")}},"Add"))),r.a.createElement("main",null,S),r.a.createElement("span",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a948cbd7.chunk.js.map