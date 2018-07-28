import * as chai from 'chai'
import { RubyAnn } from '../rubyann'

chai.should()

describe('RubyAnn annotates to ruby XML', () => {
	
	const BirdXml = 'bird=<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>'
	
	it('can annotate 1 kanji', () => {
		let rubyAnn = new RubyAnn()
		rubyAnn.text('bird={鳥,とり}')
			.should.eq(BirdXml)
	})
	it('can annotate 1 kanji with non-default delimiters', () => {
		let rubyAnn = new RubyAnn({ delimiters: '[]' })
		rubyAnn.text('bird=[鳥,とり]')
			.should.eq(BirdXml)
	})
	it('throws if delimeters are invalid - 1 character', () => {
		chai.expect(()=> new RubyAnn({ delimiters: '/' })).to.throw(`invalid delimiters: '/'`)
	})
	it('throws if delimeters are invalid - 3 characters', () => {
		chai.expect(()=> new RubyAnn({ delimiters: '|||' })).to.throw(`invalid delimiters: '|||'`)
	})
})