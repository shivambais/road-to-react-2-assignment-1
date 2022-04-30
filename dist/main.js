(()=>{"use strict";var e={989:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"#container{\r\n    /* width:80%; */\r\n    margin:auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(4,1fr);\r\n    /* grid-template-rows: auto; */\r\n    gap: 10px;\r\n    margin-top: 50px;\r\n}\r\n/* #sortFilterBox{\r\n    display: flex;\r\n    justify-content: end;\r\n    padding-right: 10px;\r\n} */\r\n/* #sort{\r\n    margin-right: 20px;\r\n} */\r\n#outer_container{\r\n    margin-top: 50px;\r\n}\r\n.smallBox{\r\n    width:100%;\r\n    height:300px;\r\n}\r\n.imageClass{\r\n    width:100%;\r\n    height: 80%;\r\n}\r\n",""]);const s=i},126:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"#navbar{\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n#search_bar{\r\n    width:80%;\r\n    margin:auto;\r\n    display: flex;\r\n    align-items: center;\r\n    /* margin:10px; */\r\n\r\n}\r\n#logo{\r\n    height:100px;\r\n    width:100px;\r\n}\r\n#query{\r\n    width:100%;\r\n    height:40px;\r\n    border:none;\r\n    border-radius:30px;\r\n    padding:10px 20px 10px 20px;\r\n    font-size: medium;\r\n    background-color: #eeeeee;\r\n}\r\n#categories{\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    /* margin-top: 0px; */\r\n    height:50px;\r\n}\r\n#categories h3{\r\n    /* border:1px solid red; */\r\n    padding: 15px;\r\n    cursor:pointer;\r\n\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(h);else{var m=o(h,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);r[s].references--}for(var c=t(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{let e=async e=>{let r=await fetch(e);return(await r.json()).results},r=(e,r)=>{r.innerHTML=null,e.forEach((({urls:{small:e},alt_description:n})=>{let t=document.createElement("div");t.setAttribute("class","smallBox");let o=document.createElement("img");o.src=e,o.setAttribute("class","imageClass");let a=document.createElement("p");a.innerText=n,t.append(o,a),r.append(t)}))};var t=n(379),o=n.n(t),a=n(795),i=n.n(a),s=n(569),c=n.n(s),l=n(565),u=n.n(l),p=n(216),d=n.n(p),h=n(589),m=n.n(h),f=n(989),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=d(),o()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var g=n(126),y={};let x;y.styleTagTransform=m(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),o()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals,document.querySelector("#navbar").innerHTML=' <div id="search_bar">\n    <img id="logo" src="https://media.istockphoto.com/vectors/overlapping-one-line-letter-t-logotype-vector-id1193845414?k=20&m=1193845414&s=612x612&w=0&h=5YXK_HLsv_FMfigGUidvIZkPenZbHMyEhEuik16_E_Y=">\n    <input type="text" id="query" placeholder="Search free high-resolution photos">\n</div>\n<div id="categories">\n    <h3 id="nature">Nature</h3>\n    <h3 id="business">Business</h3>\n    <h3 id="Music">Music</h3>\n    <h3 id="Fashion">Fashion</h3>\n    <h3 id="Technology">Technology</h3>\n    <h3 id="Science">Science</h3>\n    <h3 id="Architecture">Architecture</h3>\n    <h3 id="Abstract">Abstract</h3>\n\n</div>';let b=async()=>{x=document.querySelector("#query").value;let n=`https://api.unsplash.com/search/photos/?query=${x}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`,t=await e(n),o=document.querySelector("#container");r(t,o)};async function w(){x=this.id;let n=`https://api.unsplash.com/search/photos/?query=${x}&per_page=20&client_id=5z9p4Ky25UYCO4DrHAT8jEYWS_NrUcaL_mRmuwOvx_8`,t=await e(n),o=document.querySelector("#container");r(t,o)}let T,_=document.querySelector("#categories").children;console.log(_);for(let e of _)e.addEventListener("click",w);document.querySelector("#query").addEventListener("input",(()=>{var e;e=b,T&&clearTimeout(T),T=setTimeout(e,500)}))})()})();