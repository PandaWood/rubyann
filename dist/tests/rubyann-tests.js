"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var rubyann_1 = require("../rubyann");
chai.should();
describe('RubyAnn annotates to ruby XML', function () {
    it('should annotate text', function () {
        var a = new rubyann_1.RubyAnn();
        a.text('bird={鳥,とり}').should.eq('bird=<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>');
    });
});
