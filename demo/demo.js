// set up a click event on a convert button, to show what rubyann does
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('convert-button').addEventListener('click', function() {

		// change the explanation label and remove convert-button explanation
		document.getElementById('explanation').innerText = 'This is the result'
		document.getElementById('convert-message').innerText = ''

		// now use RubyAnn
		var annotate = new RubyAnn()
		annotate.html('.furigana-text')
	})
})