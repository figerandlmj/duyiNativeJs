var gulp = require('gulp');

var htmlclean = require('gulp-htmlclean');

var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');
var stripdebug = require('gulp-strip-debug');
var concat = require('gulp-concat');
var deporder = require('gulp-deporder');

var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var connect = require('gulp-connect');

var folder = {
	src: 'src/',
	dist: 'dist/'
}

var devMode = process.env.NODE_ENV == 'production';//是否是生产环境

gulp.task('html', function() {
	var page = gulp.src(folder.src + '*.html')
					.pipe(connect.reload());
	if(devMode){
		page.pipe(htmlclean());
	}
	page.pipe(gulp.dest(folder.dist));	
})

gulp.task('img', function() {
	gulp.src(folder.src + 'img/*')
		.pipe(imagemin())
		.pipe(gulp.dest(folder.dist + 'img'));
})

gulp.task('js', function() {
	var js = gulp.src(folder.src + 'js/*')
				 .pipe(connect.reload());
	if(devMode){
		js.pipe(deporder())
			.pipe(concat('main.js')).pipe(uglify())
			.pipe(stripdebug());
	}	
	js.pipe(gulp.dest(folder.dist + 'js'));
})

gulp.task('css', function() {
	var css = gulp.src(folder.src + 'css/*')
					.pipe(connect.reload())
					.pipe(less());
	var options = [autoprefixer()];
	if(devMode){
		options.push(cssnano());
	}
	css.pipe(postcss(options))
		.pipe(gulp.dest(folder.dist + 'css'));
})

gulp.task('watch', function() {
	gulp.watch(folder.src + '*.html', ['html']);
	gulp.watch(folder.src + 'img/*', ['img']);
	gulp.watch(folder.src + 'js/*', ['js']);
	gulp.watch(folder.src + 'css/*', ['css']);
});

gulp.task('server', function() {
	connect.server({
		port: '8081',
		livereload: true //热更新
	});
})

gulp.task('default', ['html', 'img', 'js', 'css', 'watch', 'server'], function() {
	console.log('hello');
});