// rubyann build

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json');

// transpile ts src
gulp.task('release', ()=> {
	gulp.src('src/*.ts')
		.pipe(tsProject())
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
})

