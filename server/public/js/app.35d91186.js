(function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,i){var a=Object(r["w"])("router-view"),s=Object(r["w"])("Footer");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(a),Object(r["f"])(s)],64)}var c={class:"fs-5 p-3 text-white",id:"footer "},i=Object(r["e"])("span",null,"Cascais 2021 © ",-1),a=[i];function s(e,t,n,o,i,s){return Object(r["p"])(),Object(r["d"])("div",c,a)}var u={name:"Footer"},l=n("6b0d"),f=n.n(l);const p=f()(u,[["render",s]]);var b=p,d={components:{Footer:b}};n("940c");const O=f()(d,[["render",o]]);var j=O,v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=n("6c02"),h=(n("b0c0"),n("9e27")),m=n.n(h),y=function(e){return Object(r["s"])("data-v-e6fd9a9e"),e=e(),Object(r["q"])(),e},w={class:"home"},x=y((function(){return Object(r["e"])("img",{class:"img-fluid flex-img mt-5",alt:"Vue logo",src:m.a},null,-1)})),S={class:"row section-title text-white"},_={class:"col section-title-text display-4"},k={class:"col-9 p-0 text-start"},E={class:"col-3 ps-0 pe-1 text-end"};function P(e,t,n,o,c,i){return Object(r["p"])(),Object(r["d"])("div",w,[x,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.SECTIONS,(function(e){return Object(r["p"])(),Object(r["d"])("section",{class:"section container-fluid mt-5",key:e.title},[Object(r["e"])("div",S,[Object(r["e"])("span",_,Object(r["y"])(e.title.toUpperCase()),1)]),(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.PLAYER_LIST,(function(t,n){return Object(r["p"])(),Object(r["d"])("div",{class:Object(r["l"])("row mx-auto my-2 p-1 p-lg-2 section-items fs-4  rounded-pill  bg-secondary text-white section-items-player-"+(n+1)),key:t.name},[Object(r["e"])("div",k,Object(r["y"])(o.getEmoji(n)+t.name),1),Object(r["e"])("div",E,Object(r["y"])(t[e.stat]),1)],2)})),128))])})),128))])}var T=n("2909"),C=(n("4e82"),n("a630"),n("3ca3"),n("159b"),n("b64b"),n("bc3a")),A=n.n(C),F=n("a1e9"),I={name:"Home",setup:function(){var e={trophies:"Troféus",highestTrophies:"Max Troféus","3vs3Victories":"3vs3",soloVictories:"Combate Solo",duoVictories:"Combate Duplo",brawlers:"Brawlers"},t=Object(F["l"])([]),n=function(e,t){return Array.from(e).sort((function(e,n){return e[t]>n[t]?-1:n[t]>e[t]?1:0}))};A.a.get("api/players/").then((function(e){return e.data})).then((function(r){var o=Object(T["a"])(r);Object.keys(e).forEach((function(r){var c="brawlers";r===c&&o.forEach((function(e){return e[c]=e[c].length})),t.value.push({title:e[r],stat:r,PLAYER_LIST:n(o,r)})}))}));var r=function(e){switch(e+1){case 1:return"🏆";case 2:return"🥈";case 3:return"🥉";default:return e+1+". "}};return{SECTIONS:t,getEmoji:r}}};n("5a26");const M=f()(I,[["render",P],["__scopeId","data-v-e6fd9a9e"]]);var N=M,L=[{path:"/",name:"Home",component:N}],V=Object(g["a"])({history:Object(g["b"])("/"),routes:L}),q=V;Object(r["c"])(j).use(q).mount("#app")},"5a26":function(e,t,n){"use strict";n("841f")},"841f":function(e,t,n){},"940c":function(e,t,n){"use strict";n("a22d")},"9e27":function(e,t,n){e.exports=n.p+"img/brawl_transp_gun.f36c0538.png"},a22d:function(e,t,n){}});
//# sourceMappingURL=app.35d91186.js.map