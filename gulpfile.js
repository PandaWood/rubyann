// rubyann build

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json');

// transpile ts src
gulp.task('release', function() {
	gulp.src('src/*.ts')
		.pipe(tsProject())
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
})
