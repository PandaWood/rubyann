import {RubyAnnOptions} from './index'

/**
 * converts custom syntax eg {自,じ}{由,ゆう} to ruby xml/xhtml annotation
 */
export class RubyAnn {
	private readonly RubyTemplate = '<ruby><rb>$2</rb><rp>(</rp><rt>$3</rt><rp>)</rp></ruby>'
	private readonly startChar: string
	private readonly endChar: string
	private readonly options: RubyAnnOptions = {
		delimiters: '{}'		// default to curly braces
	}

	constructor(options?: RubyAnnOptions) {
		this.options = options || this.options		// allow for the default options to be accepted if not passed in

		if (this.options.delimiters == null || this.options.delimiters.length !== 2) {
			throw new Error(`invalid delimiters: '${this.options.delimiters}'`)
		}

		this.startChar = `\\${this.options.delimiters[0]}`
		this.endChar = `\\${this.options.delimiters[1]}`
	}

	/**
	 * Take the rubyann syntax from each element in the selector and annotate with ruby XML
	 * @param {string} selector
	 */
	public html(selector: string) : void {
		let elements = document.querySelectorAll(selector)
		for (let x = 0; x < elements.length; x++) {
			let el = elements[x] as HTMLElement
			let ann = this.text(el.innerHTML)
			if (ann !== el.innerHTML) {
				el.innerHTML = ann
			}
		}
	}

	/**
	 * @param text to be annotated with ruby XML
	 * @returns annotated string in ruby XML
	 */
	public text(text: string) : string {
		let regex = RegExp(`${this.startChar}((\\S+?),(\\S+?))${this.endChar}`, 'g')
		return text.replace(regex, this.RubyTemplate)
	}
}
