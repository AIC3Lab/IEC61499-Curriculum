(()=>{"use strict";var e,a,r,t,c,o={},f={};function n(e){var a=f[e];if(void 0!==a)return a.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=o,n.c=f,e=[],n.O=(a,r,t,c)=>{if(!r){var o=1/0;for(b=0;b<e.length;b++){r=e[b][0],t=e[b][1],c=e[b][2];for(var f=!0,d=0;d<r.length;d++)(!1&c||o>=c)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(f=!1,c<o&&(o=c));if(f){e.splice(b--,1);var i=t();void 0!==i&&(a=i)}}return a}c=c||0;for(var b=e.length;b>0&&e[b-1][2]>c;b--)e[b]=e[b-1];e[b]=[r,t,c]},n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a:a}),a},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var c=Object.create(null);n.r(c);var o={};a=a||[null,r({}),r([]),r(r)];for(var f=2&t&&e;"object"==typeof f&&!~a.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((a=>o[a]=()=>e[a]));return o.default=()=>e,n.d(c,o),c},n.d=(e,a)=>{for(var r in a)n.o(a,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((a,r)=>(n.f[r](e,a),a)),[])),n.u=e=>"assets/js/"+({29:"51a7ee91",48:"a94703ab",72:"85189f22",98:"a7bd4aaa",150:"aafb51eb",156:"c4ebe55b",159:"aaff4965",185:"da5857ac",235:"a7456010",253:"dd9b4bc4",354:"57a1d77e",357:"a8a0e6fa",401:"17896441",434:"6784158b",476:"a8b5505c",505:"4c573a9b",541:"d0b91c34",568:"8ff493fe",634:"c4f5d8e4",647:"5e95c892",659:"2a5a3d93",741:"3e77cd4e",742:"aba21aa0",743:"e9ec5bcf",787:"65731338",894:"e37e443d",963:"2f445aee",969:"14eb3368",991:"4b5131ce"}[e]||e)+"."+{29:"da8d40ea",48:"384898db",72:"d2da0e46",98:"40870910",150:"b830daef",156:"8a226cf3",159:"d35f597d",185:"76c70ad6",235:"30321024",237:"efb55657",253:"202a11f0",354:"7421f3ad",357:"451aa784",401:"d51ee47f",434:"4b87da4b",476:"0de2d04f",505:"75d9537b",541:"26e81b3e",568:"d61d46f1",634:"66ca3259",647:"d34e6b79",659:"35f2d544",741:"06e9cab8",742:"a3144553",743:"4a7547d7",787:"940c01d1",894:"2a4226d8",963:"368eec4e",969:"71b8cb04",991:"9d01a57d"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},c="iec-61499-curriculum:",n.l=(e,a,r,o)=>{if(t[e])t[e].push(a);else{var f,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+r){f=u;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",c+r),f.src=e),t[e]=[a];var l=(a,r)=>{f.onerror=f.onload=null,clearTimeout(s);var c=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(r))),a)return a(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),d&&document.head.appendChild(f)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/IEC61499-Curriculum/fr/",n.gca=function(e){return e={17896441:"401",65731338:"787","51a7ee91":"29",a94703ab:"48","85189f22":"72",a7bd4aaa:"98",aafb51eb:"150",c4ebe55b:"156",aaff4965:"159",da5857ac:"185",a7456010:"235",dd9b4bc4:"253","57a1d77e":"354",a8a0e6fa:"357","6784158b":"434",a8b5505c:"476","4c573a9b":"505",d0b91c34:"541","8ff493fe":"568",c4f5d8e4:"634","5e95c892":"647","2a5a3d93":"659","3e77cd4e":"741",aba21aa0:"742",e9ec5bcf:"743",e37e443d:"894","2f445aee":"963","14eb3368":"969","4b5131ce":"991"}[e]||e,n.p+n.u(e)},(()=>{var e={973:0,869:0};n.f.j=(a,r)=>{var t=n.o(e,a)?e[a]:void 0;if(0!==t)if(t)r.push(t[2]);else if(/^(869|973)$/.test(a))e[a]=0;else{var c=new Promise(((r,c)=>t=e[a]=[r,c]));r.push(t[2]=c);var o=n.p+n.u(a),f=new Error;n.l(o,(r=>{if(n.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var c=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+o+")",f.name="ChunkLoadError",f.type=c,f.request=o,t[1](f)}}),"chunk-"+a,a)}},n.O.j=a=>0===e[a];var a=(a,r)=>{var t,c,o=r[0],f=r[1],d=r[2],i=0;if(o.some((a=>0!==e[a]))){for(t in f)n.o(f,t)&&(n.m[t]=f[t]);if(d)var b=d(n)}for(a&&a(r);i<o.length;i++)c=o[i],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(b)},r=self.webpackChunkiec_61499_curriculum=self.webpackChunkiec_61499_curriculum||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})()})();