"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var RubyAnn=function(){function t(t){if(this.options={delimiters:"{}"},this.options=t||this.options,null==this.options.delimiters||2!==this.options.delimiters.length)throw new Error("invalid delimiters: '"+this.options.delimiters+"'");this.startChar="\\"+this.options.delimiters[0],this.endChar="\\"+this.options.delimiters[1]}return t.prototype.elements=function(t){for(var e=document.querySelectorAll(t),r=0;r<e.length;r++){var i=e[r],n=this.getXml(i.innerHTML);n!==i.innerHTML&&(i.innerHTML=n)}},t.prototype.getXml=function(e){var r=RegExp(this.startChar+"((\\S+?),(\\S+?))"+this.endChar,"g");return e.replace(r,t.RubyTemplate)},t.RubyTemplate="<ruby><rb>$2</rb><rp>(</rp><rt>$3</rt><rp>)</rp></ruby>",t}();exports.RubyAnn=RubyAnn;