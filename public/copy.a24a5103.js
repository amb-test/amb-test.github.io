parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tAKo":[function(require,module,exports) {
function e(){var e=document.querySelector(".single__mainbox--img").src,i=document.createElement("img");i.classList="single__mainbox--img-mini",i.src=e,document.querySelector("#child_img").appendChild(i);var n=document.querySelector(".single__mainbox--plan").src,c=document.createElement("img");c.classList="single__mainbox--plan-mini",c.src=n,console.log(c),document.querySelector("#child_plan").appendChild(c)}function i(){var e=document.querySelector(".single__mainbox--img-mini"),i=document.querySelector(".single__mainbox--plan-mini"),n=document.querySelector(".single__mainbox--img"),c=document.querySelector(".single__mainbox--plan");e.addEventListener("click",function(){c.classList.remove("display"),n.classList.add("display")}),i.addEventListener("click",function(){n.classList.remove("display"),c.classList.add("display")})}e(),i();
},{}]},{},["tAKo"], null)
//# sourceMappingURL=copy.a24a5103.js.map