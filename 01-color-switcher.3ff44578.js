const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0;let n=0;function d(c){c.target.disabled=!0,t.disabled=!1,r(),n=setInterval(r,1e3),t.addEventListener("click",a),e.removeEventListener("click",d)}function a(r){r.target.disabled=!0,e.disabled=!1,clearInterval(n),e.addEventListener("click",d),t.removeEventListener("click",a)}function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",d);
//# sourceMappingURL=01-color-switcher.3ff44578.js.map