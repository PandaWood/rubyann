// rubyann build

var gulp = require('gulp')
var pump = require('pump')
var uglify = require('gulp-uglify')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json', {
	declaration: false
})

// transpile ts src
// I would like to work out a way to produce the ts declaration file
// but omit it from the minification (probably using the dts and js streams)
gulp.task('release', function(cb) {
	pump([
		gulp.src('src/rubyann.ts'),
			tsProject(),
			uglify(),
			gulp.dest('dist')
	], cb)
})
