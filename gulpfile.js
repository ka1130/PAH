var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulpplumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jshint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 5 version', 'IE 9']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});