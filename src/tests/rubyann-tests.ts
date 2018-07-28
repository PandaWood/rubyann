import * as chai from 'chai'
import { RubyAnn } from '../rubyann'

chai.should()

describe('RubyAnn annotates to ruby XML', ()=> {
	
	const BirdXml = 'bird=<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>'
	const rubyAnn = new RubyAnn()
	
	it('can annotate 1 kanji', ()=> {
		rubyAnn.text('bird={鳥,とり}')
			.should.eq(BirdXml)
	})
	it('can annotate multiple sequences', ()=> {
		rubyAnn.text('bird={鳥,とり}' + 'bird={鳥,とり}')
			.should.eq(BirdXml + BirdXml)
	})
	it('can annotate with non-default delimiters', ()=> {
		let rubyAnn = new RubyAnn({ delimiters: '[]' })
		rubyAnn.text('bird=[鳥,とり]')
			.should.eq(BirdXml)
	})
	it('can annotate with 2 same delimiters (not open/close type)', ()=> {
		let rubyAnn = new RubyAnn({ delimiters: '||' })
		rubyAnn.text('bird=|鳥,とり|')
			.should.eq(BirdXml)
	})
	it('throws if delimiters are invalid - 1 character', ()=> {
		chai.expect(()=> new RubyAnn({ delimiters: '/' })).to.throw(`invalid delimiters: '/'`)
	})
	it('throws if delimiters are invalid - 3 characters', ()=> {
		chai.expect(()=> new RubyAnn({ delimiters: '|||' })).to.throw(`invalid delimiters: '|||'`)
	})
})