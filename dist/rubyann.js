"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RubyAnn = (function () {
    function RubyAnn(options) {
        this.RubyTemplate = '<ruby><rb>$2</rb><rp>(</rp><rt>$3</rt><rp>)</rp></ruby>';
        this.options = {
            delimiters: '{}'
        };
        this.options = options || this.options;
        if (this.options.delimiters == null || this.options.delimiters.length !== 2) {
            throw new Error("invalid delimiters: '" + this.options.delimiters + "'");
        }
        this.startChar = "\\" + this.options.delimiters[0];
        this.endChar = "\\" + this.options.delimiters[1];
    }
    RubyAnn.prototype.html = function (selector) {
        var elements = document.querySelectorAll(selector);
        for (var x = 0; x < elements.length; x++) {
            var el = elements[x];
            var ann = this.text(el.innerHTML);
            if (ann !== el.innerHTML) {
                el.innerHTML = ann;
            }
        }
    };
    RubyAnn.prototype.text = function (text) {
        var regex = RegExp(this.startChar + "((\\S+?),(\\S+?))" + this.endChar, 'g');
        return text.replace(regex, this.RubyTemplate);
    };
    return RubyAnn;
}());
exports.RubyAnn = RubyAnn;
