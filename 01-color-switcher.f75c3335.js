!function(){var t={btStartEl:document.querySelector("button[data-start]"),btStopEl:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},e=null;t.btStartEl.addEventListener("click",(function(){t.btStartEl.setAttribute("disabled",""),e=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.btStopEl.addEventListener("click",(function(){clearInterval(e),t.btStartEl.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.f75c3335.js.map
