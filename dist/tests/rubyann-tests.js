"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var rubyann_1 = require("../rubyann");
chai.should();
describe('RubyAnn annotates to ruby XML', function () {
    var BirdXml = 'bird=<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>';
    it('can annotate 1 kanji', function () {
        var rubyAnn = new rubyann_1.RubyAnn();
        rubyAnn.text('bird={鳥,とり}')
            .should.eq(BirdXml);
    });
    it('can annotate 1 kanji with non-default delimiters', function () {
        var rubyAnn = new rubyann_1.RubyAnn({ delimiters: '[]' });
        rubyAnn.text('bird=[鳥,とり]')
            .should.eq(BirdXml);
    });
    it('throws if delimeters are invalid - 1 character', function () {
        chai.expect(function () { return new rubyann_1.RubyAnn({ delimiters: '/' }); }).to.throw("invalid delimiters: '/'");
    });
    it('throws if delimeters are invalid - 3 characters', function () {
        chai.expect(function () { return new rubyann_1.RubyAnn({ delimiters: '|||' }); }).to.throw("invalid delimiters: '|||'");
    });
});
