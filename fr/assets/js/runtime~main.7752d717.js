(()=>{"use strict";var e,r,t,a,o,n={},i={};function c(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=n,c.c=i,e=[],c.O=(r,t,a,o)=>{if(!t){var n=1/0;for(f=0;f<e.length;f++){t=e[f][0],a=e[f][1],o=e[f][2];for(var i=!0,u=0;u<t.length;u++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](t[u])))?t.splice(u--,1):(i=!1,o<n&&(n=o));if(i){e.splice(f--,1);var d=a();void 0!==d&&(r=d)}}return r}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[t,a,o]},c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var i=2&a&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,c.d(o,n),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>"assets/js/"+({29:"51a7ee91",48:"a94703ab",98:"a7bd4aaa",159:"aaff4965",185:"da5857ac",235:"a7456010",354:"57a1d77e",401:"17896441",634:"c4f5d8e4",647:"5e95c892",741:"3e77cd4e",742:"aba21aa0",787:"65731338",963:"2f445aee",969:"14eb3368",991:"4b5131ce"}[e]||e)+"."+{29:"da8d40ea",48:"384898db",98:"40870910",159:"b38acf36",185:"051efedc",235:"30321024",237:"efb55657",354:"f68eaa7e",401:"d51ee47f",634:"66ca3259",647:"d34e6b79",741:"06e9cab8",742:"a3144553",787:"4ea86a89",963:"067924f4",969:"71b8cb04",991:"37248b23"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="iec-61499-curriculum:",c.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var i,u;if(void 0!==t)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var l=d[f];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+t){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+t),i.src=e),a[e]=[r];var s=(r,t)=>{i.onerror=i.onload=null,clearTimeout(b);var o=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/IEC61499-Curriculum/fr/",c.gca=function(e){return e={17896441:"401",65731338:"787","51a7ee91":"29",a94703ab:"48",a7bd4aaa:"98",aaff4965:"159",da5857ac:"185",a7456010:"235","57a1d77e":"354",c4f5d8e4:"634","5e95c892":"647","3e77cd4e":"741",aba21aa0:"742","2f445aee":"963","14eb3368":"969","4b5131ce":"991"}[e]||e,c.p+c.u(e)},(()=>{var e={973:0,869:0};c.f.j=(r,t)=>{var a=c.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(869|973)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=c.p+c.u(r),i=new Error;c.l(n,(t=>{if(c.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+r,r)}},c.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],i=t[1],u=t[2],d=0;if(n.some((r=>0!==e[r]))){for(a in i)c.o(i,a)&&(c.m[a]=i[a]);if(u)var f=u(c)}for(r&&r(t);d<n.length;d++)o=n[d],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(f)},t=self.webpackChunkiec_61499_curriculum=self.webpackChunkiec_61499_curriculum||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();