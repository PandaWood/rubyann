"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var RubyAnn=function(){function t(t){if(this.RubyTemplate="<ruby><rb>$2</rb><rp>(</rp><rt>$3</rt><rp>)</rp></ruby>",this.options={delimiters:"{}"},this.options=t||this.options,null==this.options.delimiters||2!==this.options.delimiters.length)throw new Error("invalid delimiters: '"+this.options.delimiters+"'");this.startChar="\\"+this.options.delimiters[0],this.endChar="\\"+this.options.delimiters[1]}return t.prototype.elements=function(t){for(var e=document.querySelectorAll(t),i=0;i<e.length;i++){var r=e[i],n=this.getXml(r.innerHTML);n!==r.innerHTML&&(r.innerHTML=n)}},t.prototype.getXml=function(t){var e=RegExp(this.startChar+"((\\S+?),(\\S+?))"+this.endChar,"g");return t.replace(e,this.RubyTemplate)},t}();exports.RubyAnn=RubyAnn;