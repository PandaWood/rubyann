export interface RubyAnnOptions {
	/**
	 * The closing and opening delimiter characters as a single string eg "[]" or "@@" - default is "{}"
	 * These delimiters are used around each word in our custom ruby syntax
	 * eg {日,に}{本,ほん}{語,ご}"
	 */
	delimiters: string
}

/**
 * converts custom syntax eg {自,じ}{由,ゆう} to ruby xml/xhtml annotation
 */
export class RubyAnn {
	private static readonly RubyTemplate = '<ruby><rb>$2</rb><rp>(</rp><rt>$3</rt><rp>)</rp></ruby>'
	private readonly startChar: string
	private readonly endChar: string
	private readonly options: RubyAnnOptions = {
		delimiters: '{}'		// default to curly braces
	}
	
	/**
	 * @param options
	 */
	constructor(options?: RubyAnnOptions) {
		this.options = options || this.options		// allow default options to stick if not passed in

		if (this.options.delimiters == null || this.options.delimiters.length !== 2) {
			throw new Error(`invalid delimiters: '${this.options.delimiters}'`)
		}

		this.startChar = `\\${this.options.delimiters[0]}`
		this.endChar = `\\${this.options.delimiters[1]}`
	}

	/**
	 * update all DOM elements that contain our custom syntax, based on the selector
	 * @param {string} selector - elements to search for custom syntax
	 */
	public elements(selector: string) : void {
		let elements = document.querySelectorAll(selector)
		for (let x = 0; x < elements.length; x++) {
			let el = elements[x] as HTMLElement
			let ann = this.getXml(el.innerHTML)
			if (ann !== el.innerHTML) {
				el.innerHTML = ann
			}
		}
	}

	/**
	 * @param text to be annotated with ruby XML
	 * @returns annotated string in ruby XML
	 */
	public getXml(text: string) : string {
		let regex = RegExp(`${this.startChar}((\\S+?),(\\S+?))${this.endChar}`, 'g')
		return text.replace(regex, RubyAnn.RubyTemplate)
	}
}
