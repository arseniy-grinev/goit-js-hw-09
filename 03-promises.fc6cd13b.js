function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=Number(u.value),n=Number(l.value),r=Number(d.value);for(let t=1;t<=r;t+=1){a(t,o+(t-1)*n).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:3e3+o})})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:3e3+o})}))}}));
//# sourceMappingURL=03-promises.fc6cd13b.js.map
