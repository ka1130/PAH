var gulp = require("gulp");
var $ = require("gulp-load-plugins")({
    lazy: true
});
// var sass = require("gulp-sass");
// var autoprefixer = require("gulp-autoprefixer");
// var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var del = require("del");
// var useref = require("gulp-useref");
// var uglify = require("gulp-uglify");
var pump = require("pump");
// var imagemin = require("gulp-imagemin");
var runSequence = require("run-sequence");

gulp.task("sass", function() {
    return gulp.src("src/sass/main.scss")
        .pipe($.plumber())
        .pipe($.sass.sync())
        .pipe($.autoprefixer({
            browsers: ["last 5 version", "IE 9"]
        }))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream());
});

gulp.task("server", function() {
    browserSync.init({
        server: "src/"
    });
});

gulp.task("watch", function() {
    gulp.watch("src/sass/**/*.scss", ["sass"]);
    gulp.watch(["src/*.html", "src/**/*.js"], browserSync.reload);
});

gulp.task("clean", function() {
    return del("dist/");
});

gulp.task("concat", function() {
    gulp.src("src/*.html")
        .pipe($.useref())
        .pipe(gulp.dest("dist/"));
});

gulp.task("compress", function(cb) {
    pump([
            gulp.src("src/js/*.js"),
            uglify(),
            gulp.dest("dist")
        ],
        cb
    );
});

gulp.task("img", function() {
    return gulp.src("dist/img/*", {
            base: "dist"
        })
        .pipe($.imagemin())
        .pipe(gulp.dest("dist/"));
});

gulp.task("copy", function() {
    return gulp.src(["src/fonts/*", "src/img/*"], {
            base: "src"
        })
        .pipe(gulp.dest("dist"));
});

gulp.task("build", function(cb) {
    runSequence("clean", "concat", "compress", "copy", "img", cb);
});

gulp.task("build:server", ["build"], function() {
    browserSync.init({
        server: "dist/"
    });
});

gulp.task("default", ["sass", "server", "watch"]);