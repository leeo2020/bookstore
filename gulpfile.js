const gulp=require('gulp')
const cssmin=require('gulp-cssmin')
const prefixer=require('gulp-autoprefixer')
const sass=require('gulp-sass')
const htmlmin=require('gulp-htmlmin')
const babel=require('gulp-babel')
const uglify=require('gulp-uglify')
const del=require('del')
const server=require('gulp-webserver')

const cssHandle=()=>{
	return gulp.src('./css/*.css')
		.pipe(prefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'))
}
const sassHandle=()=>{
	return gulp.src('./sass/*.scss')
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css'))
}

const htmlHandle=()=>{
	return gulp.src('./public/*.html')
		.pipe(htmlmin({
			'collapseWhitespace':true,
			'removeAttributeQuotes':true,
			'collapseBooleanAttributes':true,
			'removeComments':true,
			'minifyCss':true,
			'minifyJs':true
		})
		.pipe(gulp.dest('./dist/public'))
		)
}

const jsHandle=()=>{
	return gulp.src('./js/*.js')
		.pipe(babel({
			presets:['@babel/env']}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
}

const libHandle=()=>{
	return gulp.src('./lib/**')
		.pipe(gulp.dest('./dist/lib'))
}

const imgHandle=()=>{
	return gulp.src('./img/*.{png,jpg,gif,ico}')
		.pipe(gulp.dest('./dist/img'))
}

const phpHandle=()=>{
	return gulp.src('./admin/*.php')
		.pipe(gulp.dest('./dist/admin'))
}

const fontsHandle=()=>{
	return gulp.src('./fonts/**')
		.pipe(gulp.dest('./dist/fonts'))
}

const delHandle=()=>{
	return del('./dist')
}

const watchHandle=()=>{
	gulp.watch('./public/*.html',htmlHandle)
	gulp.watch('./css/*.css',cssHandle)
	gulp.watch('./sacc/*.scss',sassHandle)
	gulp.watch('./js/*.js',jsHandle)
	gulp.watch('./lib/*.js',libHandle)
	gulp.watch('./img/**',imgHandle)
	gulp.watch('./admin/*.php',phpHandle)
	gulp.watch('./fonts/**',fontsHandle)
}

const webHandle=()=>{
	return gulp.src('./dist')
		.pipe(server({
			port:9999,
			open:'/public/index.html',
			livereload:true
		}))
}

module.exports.default=gulp.series(
		delHandle,
		gulp.parallel(
			htmlHandle,
			cssHandle,
			sassHandle,
			jsHandle,
			libHandle,
			imgHandle,
			phpHandle,
			fontsHandle
		),
		webHandle,
		watchHandle
		)
