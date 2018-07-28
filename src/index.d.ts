export { RubyAnn } from './rubyann'

export interface RubyAnnOptions {
	/**
	 * The closing and opening delimiter characters as a single string eg "[]" or "@@" - default is "{}"
	 * These delimiters are used around each word in our custom ruby syntax
	 * eg "The word for 'japanese language' is {日,に}{本,ほん}{語,ご}"
	 */
	delimiters: string
}