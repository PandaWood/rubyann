import * as chai from 'chai'
import {RubyAnn} from '../rubyann'

chai.should()

describe('RubyAnn annotates to ruby XML', () => {
	it('should annotate text', () => {
		let a = new RubyAnn()
		a.text('bird={鳥,とり}').should.eq('bird=<ruby><rb>鳥</rb><rp>(</rp><rt>とり</rt><rp>)</rp></ruby>')
	})
})