parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||a(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return r(e)}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var i=document.querySelector("thead"),c=document.querySelector("body"),l=document.querySelector("tbody"),s=new Intl.NumberFormat("en-US"),d=0,u=[];i.addEventListener("click",function(n){var t=n.target.cellIndex,a=e(l.children).sort(function(e,n){var a=e.cells[t].textContent.replace(",","").replace("$",""),o=n.cells[t].textContent.replace(",","").replace("$","");return isNaN(a)?a.localeCompare(o):a-o});return u.push(n.target.cellIndex),void 0===u[1]?(d=1,l.append.apply(l,e(a))):u[u.length-2]===u[u.length-1]?0===d?(d=1,l.append.apply(l,e(a))):(d=0,l.append.apply(l,e(a.reverse()))):u[u.length-2]!==u[u.length-1]?(d=1,l.append.apply(l,e(a))):void 0}),l.addEventListener("click",function(n){n.target.closest("tr").matches(".active")||(e(l.children).forEach(function(e){e.classList.remove("active")}),n.target.closest("tr").classList.toggle("active"))}),c.insertAdjacentHTML("beforeend",'\n  <form \n    class="new-employee-form"\n  >\n    <label>Name:\n      <input\n      data-qa="name"\n      name="name"\n      type="text"\n      required\n      >\n    </label>\n\n    <label>Position:\n      <input\n        data-qa="position"\n        name="position"\n        type="text"\n        required\n      >\n    </label>\n\n    <label>Office:\n      <select\n        data-qa="office"\n        id="office"\n        name="office"\n        required\n      >\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n\n    <label>Age:\n      <input\n        data-qa="age"\n        name="age"\n        type="number"\n        required\n      >\n    </label>\n\n    <label>Salary:\n      <input\n        data-qa="salary"\n        name="salary"\n        type="number"\n        required\n      >\n    </label>\n\n    <button name="button" type="submit">Save to table</button>\n  </form>\n');var p=function(n,t,a){c.insertAdjacentHTML("beforeend",'\n    <div\n    style="top: 10px; right: 10px;"\n    data-qa="notification"\n    class="notification '.concat(a,'">\n    <h2 class="title">\n    ').concat(n,"\n    </h2>\n    <p>\n    ").concat(t,"\n    </p>\n    </div>\n    "));var o=document.querySelectorAll(".notification");setTimeout(function(){for(var n=0,t=e(o);n<t.length;n++){t[n].remove()}},2e3)},m=document.querySelector(".new-employee-form");m.addEventListener("submit",function(e){e.preventDefault();var n=new FormData(m),t=Object.fromEntries(n.entries()),a=String(s.format(t.salary));return t.name.length<4?p("Error message","Name has to contain 4 or more letters.","error"):t.age<18||t.age>90?p("Error message","Age has to be between 18 and 90 years old.","error"):(l.insertAdjacentHTML("afterbegin","\n  <tr>\n    <td>".concat(t.name,"</td>\n    <td>").concat(t.position,"</td>\n    <td>").concat(t.office,"</td>\n    <td>").concat(t.age,"</td>\n    <td>$").concat(a,"</td>\n  </tr>\n  ")),void p("Success message","The employee is successfully added to the table.","success"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2f36f1d3.js.map