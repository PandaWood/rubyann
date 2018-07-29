import * as chai from 'chai'
import { RubyAnn } from '../rubyann'

chai.should()

describe('RubyAnn annotates to ruby XML', ()=> {
	
	const BirdXml = 'bird=<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>'
	const rubyAnn = new RubyAnn()		// any tests that use default delimiters can just reuse this
	
	it('can annotate 1 kanji', ()=> {
		rubyAnn.getXml('bird={鳥,とり}')
			.should.eq(BirdXml)
	})
	it('can annotate multiple kanji - 2 repeated', ()=> {
		rubyAnn.getXml('bird={鳥,とり}' + 'bird={鳥,とり}')
			.should.eq(BirdXml + BirdXml)
	})
	it('can annotate multiple kanji - 4 different', ()=> {
		const OneStoneTwoBirdsXml =
			'<ruby><rb>一</rb><rp>(</rp><rt>one</rt><rp>)</rp></ruby>' +
			'<ruby><rb>石</rb><rp>(</rp><rt>stone</rt><rp>)</rp></ruby>' +
			'<ruby><rb>二</rb><rp>(</rp><rt>two</rt><rp>)</rp></ruby>' +
			'<ruby><rb>鳥</rb><rp>(</rp><rt>birds</rt><rp>)</rp></ruby>'
		
		let xml = rubyAnn.getXml('{一,one}{石,stone}{二,two}{鳥,birds}')
		xml.should.eq(OneStoneTwoBirdsXml)
	})
	it('can annotate with non-default delimiters', ()=> {
		let ra = new RubyAnn({ delimiters: '[]' })
		ra.getXml('bird=[鳥,とり]')
			.should.eq(BirdXml)
	})
	it('can annotate with 2 same delimiters (not open/close type)', ()=> {
		let ra = new RubyAnn({ delimiters: '||' })
		ra.getXml('bird=|鳥,とり|')
			.should.eq(BirdXml)
	})
	it('throws if delimiters are invalid - 1 character', ()=> {
		chai.expect(()=> new RubyAnn({ delimiters: '/' })).to.throw(`invalid delimiters: '/'`)
	})
	it('throws if delimiters are invalid - 3 characters', ()=> {
		chai.expect(()=> new RubyAnn({ delimiters: '|||' })).to.throw(`invalid delimiters: '|||'`)
	})
	it('throws if delimiters are invalid - empty', ()=> {
		chai.expect(()=> new RubyAnn({ delimiters: '' })).to.throw(`invalid delimiters: ''`)
	})
})
