(this["webpackJsonpreact-lab"]=this["webpackJsonpreact-lab"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(24),a(1)),u=function(e){var t=e.changeScreen;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"welcome-screen"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"See characters you want?"),r.a.createElement("p",null,"Click button you must!"),r.a.createElement("button",{className:"welcome-button",onClick:t},"Character list")))},i=(a(25),a(2)),s=a.n(i),m=a(5),p=a(4),v=a.n(p),f=function(e){var t=e.changeScreen,a=e.setFavoritePeople,l=e.favoritePeople,c=Object(n.useState)(null),u=Object(o.a)(c,2),i=u[0],p=u[1],f=Object(n.useState)(!1),d=Object(o.a)(f,2),E=d[0],b=d[1],h=Object(n.useState)([]),g=Object(o.a)(h,2),k=g[0],j=g[1],w=Object(n.useState)(""),O=Object(o.a)(w,2),C=O[0],S=O[1],y=Object(n.useState)([]),L=Object(o.a)(y,2),N=L[0],x=L[1];Object(n.useEffect)((function(){var e=!0;return b(!0),function(){var t=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.delegateYield(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://swapi.dev/api/people/");case 2:if(a=t.sent,e){t.next=5;break}return t.abrupt("return",{v:void 0});case 5:j(a.data.results),x(a.data.results),n=2;case 8:if(null===a.data.next){t.next=19;break}return t.next=11,v()("https://swapi.dev/api/people/?page=".concat(n));case 11:if(a=t.sent,e){t.next=14;break}return t.abrupt("return",{v:void 0});case 14:j((function(e){return e.concat(a.data.results)})),x((function(e){return e.concat(a.data.results)})),n++,t.next=8;break;case 19:case"end":return t.stop()}}),t)}))(),"t0",2);case 2:if("object"!==typeof(a=t.t0)){t.next=5;break}return t.abrupt("return",a.v);case 5:t.next=11;break;case 7:t.prev=7,t.t1=t.catch(0),p(t.t1),console.log(t.t1);case 11:b(!1);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]);var P=N.map((function(e,n){return r.a.createElement("div",{className:"card",key:e.name+n,onClick:function(){t(e)}},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Height: ",e.height," cm"),r.a.createElement("p",null,"Eye color: ",e.eye_color),r.a.createElement("p",null,"Skin color: ",e.skin_color),r.a.createElement("button",{onClick:function(t){return function(e,t){e.stopPropagation(),l.includes(t)||a(t)}(t,e)}},"Add to favorites"))}));return i?r.a.createElement("div",null,i):!0===E?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"list-component"},r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, eye color or skin color",onChange:function(e){var t=k.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.skin_color.toLowerCase().includes(e.target.value.toLowerCase())||t.eye_color.toLowerCase().includes(e.target.value.toLowerCase())}));x(t),S(e.target.value)},value:C})),r.a.createElement("h2",null,"All People"),r.a.createElement("div",{className:"gallery"},P))},d=a(6),E=function(e){var t=e.changeScreen,a=e.favoritePeople,l=e.favoritePlanets,c=e.setFavoritePeople,u=e.setFavoritePlanets,i=Object(n.useState)(!0),s=Object(o.a)(i,2),m=s[0],p=s[1],v=Object(n.useState)("all"),f=Object(o.a)(v,2),E=f[0],b=f[1],h=Object(n.useState)([]),g=Object(o.a)(h,2),k=g[0],j=g[1],w=Object(n.useState)([]),O=Object(o.a)(w,2),C=O[0],S=O[1],y=Object(n.useState)([]),L=Object(o.a)(y,2),N=L[0],x=L[1],P=Object(n.useState)([]),_=Object(o.a)(P,2),F=_[0],A=_[1],B=Object(n.useState)(""),H=Object(o.a)(B,2),Y=H[0],M=H[1];Object(n.useEffect)((function(){j.apply(void 0,Object(d.a)(k).concat([a])),S.apply(void 0,Object(d.a)(C).concat([l])),x([].concat(Object(d.a)(a),Object(d.a)(l))),A([].concat(Object(d.a)(a),Object(d.a)(l))),p(!1)}),[a,l,k,C]);var R=function(e){t(e)},T=function(e,t){e.stopPropagation();var n=a.filter((function(e){return e.name!==t.name}));j(n),c(n);var r=N.filter((function(e){return e.name!==t.name}));A(r),x(r)},W=function(e,t){e.stopPropagation();var a=l.filter((function(e){return e.name!==t.name}));u(a),S(a);var n=N.filter((function(e){return e.name!==t.name}));A(n),x(n)},G=k.map((function(e,t){return r.a.createElement("div",{className:"card",key:e.name,onClick:function(){return R(e)}},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Height: ",e.height),r.a.createElement("p",null,"Eye color: ",e.eye_color),r.a.createElement("p",null,"Skin color: ",e.skin_color),r.a.createElement("button",{onClick:function(t){return T(t,e)}},"Remove from favorites"))})),J=C.map((function(e){return r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Population: ",e.population),r.a.createElement("button",{onClick:function(t){return W(t,e)}},"Remove from favorites"))})),D=F.map((function(e){return e.terrain?r.a.createElement("div",{className:"card",key:e.name},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Population: ",e.population),r.a.createElement("button",{onClick:function(t){return W(t,e)}},"Remove from favorites")):r.a.createElement("div",{className:"card",key:e.name,onClick:function(){return R(e)}},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Height: ",e.height," cm"),r.a.createElement("p",null,"Eye color: ",e.eye_color),r.a.createElement("p",null,"Skin color: ",e.skin_color),r.a.createElement("button",{onClick:function(t){return T(t,e)}},"Remove from favorites"))}));return!0===m?r.a.createElement("div",{className:"loader"}):0===a.length&&0===l.length?r.a.createElement("div",{className:"list-component"},r.a.createElement("h1",null,"You currently have no favorites")):"people"===E?r.a.createElement("div",{className:"list-component"},r.a.createElement("button",{onClick:function(){return b("all")}},"List all"),r.a.createElement("button",{onClick:function(){return b("people")}},"List people"),r.a.createElement("button",{onClick:function(){return b("planets")}},"List planets"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, eye color or skin color",onChange:function(e){var t=a.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.skin_color.toLowerCase().includes(e.target.value.toLowerCase())||t.eye_color.toLowerCase().includes(e.target.value.toLowerCase())}));j(t),M(e.target.value)},value:Y})),r.a.createElement("h1",null,"Your favorite"),r.a.createElement("div",null,r.a.createElement("h2",null,"People"),r.a.createElement("div",{className:"gallery"},G))):"planets"===E?r.a.createElement("div",{className:"list-component"},r.a.createElement("button",{onClick:function(){return b("all")}},"List all"),r.a.createElement("button",{onClick:function(){return b("people")}},"List people"),r.a.createElement("button",{onClick:function(){return b("planets")}},"List planets"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, terrain or climate",onChange:function(e){var t=l.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.terrain.toLowerCase().includes(e.target.value.toLowerCase())||t.climate.toLowerCase().includes(e.target.value.toLowerCase())}));S(t),M(e.target.value)},value:Y})),r.a.createElement("h1",null,"Your favorites"),r.a.createElement("div",null,r.a.createElement("h2",null,"Planets"),r.a.createElement("div",{className:"gallery"},J))):"all"===E?r.a.createElement("div",{className:"list-component"},r.a.createElement("button",{onClick:function(){return b("all")}},"List all"),r.a.createElement("button",{onClick:function(){return b("people")}},"List people"),r.a.createElement("button",{onClick:function(){return b("planets")}},"List planets"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on character name, eye color, skin color, planet name, terrain or climate",onChange:function(e){var t=N.filter((function(t){return console.log(t),t.skin_color?t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.skin_color.toLowerCase().includes(e.target.value.toLowerCase())||t.eye_color.toLowerCase().includes(e.target.value.toLowerCase()):t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.terrain.toLowerCase().includes(e.target.value.toLowerCase())||t.climate.toLowerCase().includes(e.target.value.toLowerCase())}));A(t),M(e.target.value)},value:Y})),r.a.createElement("h1",null,"Your favorites"),r.a.createElement("div",null,r.a.createElement("h2",null,"People & Planets"),r.a.createElement("div",{className:"gallery"},D))):void 0},b=function(e){var t=e.setFavoritePlanets,a=e.favoritePlanets,l=e.changeScreen,c=Object(n.useState)(null),u=Object(o.a)(c,2),i=u[0],p=u[1],f=Object(n.useState)(!1),d=Object(o.a)(f,2),E=d[0],b=d[1],h=Object(n.useState)([]),g=Object(o.a)(h,2),k=g[0],j=g[1],w=Object(n.useState)(""),O=Object(o.a)(w,2),C=O[0],S=O[1],y=Object(n.useState)([]),L=Object(o.a)(y,2),N=L[0],x=L[1];Object(n.useEffect)((function(){var e=!0;return b(!0),function(){var t=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.delegateYield(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://swapi.dev/api/planets/");case 2:if(a=t.sent,e){t.next=5;break}return t.abrupt("return",{v:void 0});case 5:j(a.data.results),x(a.data.results),n=2;case 8:if(null===a.data.next){t.next=19;break}return t.next=11,v()("https://swapi.dev/api/planets/?page=".concat(n));case 11:if(a=t.sent,e){t.next=14;break}return t.abrupt("return",{v:void 0});case 14:j((function(e){return e.concat(a.data.results)})),x((function(e){return e.concat(a.data.results)})),n++,t.next=8;break;case 19:case"end":return t.stop()}}),t)}))(),"t0",2);case 2:if("object"!==typeof(a=t.t0)){t.next=5;break}return t.abrupt("return",a.v);case 5:t.next=10;break;case 7:t.prev=7,t.t1=t.catch(0),p(t.t1);case 10:b(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[]);var P=N.map((function(e,n){return r.a.createElement("div",{className:"card",key:e.name+n,onClick:function(){l(e)}},r.a.createElement("section",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Population: ",e.population)),r.a.createElement("button",{onClick:function(n){return r=e,n.stopPropagation(),void(a.includes(r)||t(r));var r}},"Add to favorites"))}));return i?r.a.createElement("div",null,i):!0===E?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"list-component"},r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search on name, climate or terrain",onChange:function(e){var t=k.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.terrain.toLowerCase().includes(e.target.value.toLowerCase())||t.climate.toLowerCase().includes(e.target.value.toLowerCase())}));x(t),S(e.target.value)},value:C})),r.a.createElement("h2",null,"All Planets"),r.a.createElement("div",{className:"gallery"},P))},h=function(e){var t=e.person,a=Object(n.useState)(!1),l=Object(o.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(),p=Object(o.a)(i,2),f=p[0],d=p[1],E=Object(n.useState)(null),b=Object(o.a)(E,2),h=b[0],g=b[1],k=Object(n.useState)([]),j=Object(o.a)(k,2),w=j[0],O=j[1];console.log(t),Object(n.useEffect)((function(){var e=!0;return u(!0),function(){var a=Object(m.a)(s.a.mark((function a(){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.homeworld){a.next=15;break}return a.prev=1,a.next=4,v()(t.homeworld);case 4:if(n=a.sent,e){a.next=7;break}return a.abrupt("return");case 7:g(n.data.name),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),d(a.t0),console.log(f);case 14:u(!1);case 15:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(){return a.apply(this,arguments)}}()(),function(){e=!1}}),[f,t.homeworld]),Object(n.useEffect)((function(){var e=!0;return function(){var a=Object(m.a)(s.a.mark((function a(){var n,r,l;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,n=s.a.mark((function a(n){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v()(t.films[n]);case 2:if(r=a.sent,e){a.next=5;break}return a.abrupt("return",{v:void 0});case 5:O((function(e){return e.concat(r.data.title)}));case 6:case"end":return a.stop()}}),a)})),r=0;case 3:if(!(r<t.films.length)){a.next=11;break}return a.delegateYield(n(r),"t0",5);case 5:if("object"!==typeof(l=a.t0)){a.next=8;break}return a.abrupt("return",l.v);case 8:r++,a.next=3;break;case 11:a.next=16;break;case 13:a.prev=13,a.t1=a.catch(0),d(a.t1);case 16:u(!1);case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(){return a.apply(this,arguments)}}()(),function(){e=!1}}),[t.films]);var C=w.map((function(e){return r.a.createElement("p",{key:e},e)}));return f?r.a.createElement("div",null,f):!0===c?r.a.createElement("div",{className:"loader"}):t.height?r.a.createElement("div",{className:"detailed-card"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"detailed-grid"},r.a.createElement("div",null,"Birth year: ",r.a.createElement("p",null,t.birth_year)),r.a.createElement("div",null,"Height: ",r.a.createElement("p",null,t.height," cm")),r.a.createElement("div",null,"Hair color: ",r.a.createElement("p",null,t.hair_color)),r.a.createElement("div",null,"Eye color: ",r.a.createElement("p",null,t.eye_color)),r.a.createElement("div",null,"Skin color: ",r.a.createElement("p",null,t.skin_color)),r.a.createElement("div",null,"Gender: ",r.a.createElement("p",null,t.gender)),r.a.createElement("div",null,"Mass: ",r.a.createElement("p",null,t.mass," kg")),r.a.createElement("div",null,"Homeworld: ",r.a.createElement("p",null,h)),r.a.createElement("div",null,"Movies: ",r.a.createElement("div",null,C)))):r.a.createElement("div",{className:"detailed-card"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"detailed-grid"},r.a.createElement("div",null,"Climate: ",r.a.createElement("p",null,t.climate)),r.a.createElement("div",null,"Diameter: ",r.a.createElement("p",null,t.diameter)),r.a.createElement("div",null,"Gravity: ",r.a.createElement("p",null,t.gravity)),r.a.createElement("div",null,"Orbital period: ",r.a.createElement("p",null,t.orbital_period)),r.a.createElement("div",null,"Population: ",r.a.createElement("p",null,t.population)),r.a.createElement("div",null,"Rotation period: ",r.a.createElement("p",null,t.rotation_period)),r.a.createElement("div",null,"Surface water: ",r.a.createElement("p",null,t.surface_water)),r.a.createElement("div",null,"Terrain: ",r.a.createElement("p",null,t.terrain)),r.a.createElement("div",null,"Movies: ",r.a.createElement("div",null,C))))},g=function(e){var t=e.setFavoritePeople,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],p=s[1],v=Object(n.useState)(""),f=Object(o.a)(v,2),d=f[0],E=f[1],b=Object(n.useState)(""),h=Object(o.a)(b,2),g=h[0],k=h[1],j=Object(n.useState)(!1),w=Object(o.a)(j,2),O=w[0],C=w[1],S=Object(n.useState)(!0),y=Object(o.a)(S,2),L=y[0],N=y[1],x="";Object(n.useEffect)((function(){var e=!0;if(0===c.length||0===m.length||0===g.length||0===d.length){if(!e)return;N(!0)}else{if(!e)return;N(!1)}return function(){e=!1}}),[c,m,d,g]);return O&&(x=L?"valid":"invalid"),r.a.createElement("div",{className:"create-box"},r.a.createElement("h2",null,"Create your own favorite character"),r.a.createElement("div",null,"Name:",r.a.createElement("input",{type:"text",value:c,className:x,onChange:function(e){return u(e.target.value)},onBlur:function(e){return C(!0)}})," ",r.a.createElement("br",null)),r.a.createElement("div",null,"Skin color:",r.a.createElement("input",{type:"text",value:m,className:x,onChange:function(e){return p(e.target.value)},onBlur:function(e){return C(!0)}})," ",r.a.createElement("br",null)),r.a.createElement("div",null,"Eye color:",r.a.createElement("input",{type:"text",value:d,className:x,onChange:function(e){return E(e.target.value)},onBlur:function(e){return C(!0)}})," ",r.a.createElement("br",null)),r.a.createElement("div",null,"Height (cm):",r.a.createElement("input",{type:"text",value:g,className:x,onChange:function(e){return k(e.target.value)},onBlur:function(e){return C(!0)}})," ",r.a.createElement("br",null)),r.a.createElement("button",{disabled:L,onClick:function(){t([{name:c,skin_color:m,eye_color:d,height:g}])}},"Submit"))};var k=function(){var e=Object(n.useState)("welcomeScreen"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),i=Object(o.a)(c,2),s=i[0],m=i[1],p=Object(n.useState)([]),v=Object(o.a)(p,2),d=v[0],k=v[1],j=Object(n.useState)([]),w=Object(o.a)(j,2),O=w[0],C=w[1],S=null;switch(a){case"welcomeScreen":S=r.a.createElement(u,{changeScreen:function(){return l("peopleScreen")}});break;case"peopleScreen":S=r.a.createElement(f,{changeScreen:function(e){l("detailedScreen"),m(e)},setFavoritePeople:function(e){k((function(t){return t.concat(e)}))},favoritePeople:d});break;case"favoriteScreen":S=r.a.createElement(E,{changeScreen:function(e){l("detailedScreen"),m(e)},favoritePeople:d,favoritePlanets:O,setFavoritePeople:function(e){k(e)},setFavoritePlanets:function(e){C(e)}});break;case"planetScreen":S=r.a.createElement(b,{changeScreen:function(e){l("detailedScreen"),m(e)},setFavoritePlanets:function(e){C((function(t){return t.concat(e)}))},favoritePlanets:O});break;case"detailedScreen":S=r.a.createElement(h,{person:s});break;case"createScreen":S=r.a.createElement(g,{setFavoritePeople:function(e){k((function(t){return t.concat(e)}))}})}return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("button",{onClick:function(){return l("favoriteScreen")}},"My favorites"),r.a.createElement("button",{onClick:function(){return l("peopleScreen")}},"List people "),r.a.createElement("button",{onClick:function(){return l("planetScreen")}},"List planets "),r.a.createElement("button",{onClick:function(){return l("createScreen")}},"Add"))),r.a.createElement("main",null,S),r.a.createElement("span",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.1644b97d.chunk.js.map