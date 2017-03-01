var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var del = require("del");
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var pump = require("pump");
var imagemin = require("gulp-imagemin");

gulp.task("sass", function() {
    gulp.src("src/sass/main.scss")
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(autoprefixer({
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
    del("dist/");
});

gulp.task("minify", function() {
    gulp.src("src/*.html")
        .pipe(useref())
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
    gulp.src("src/img/*", {
            base: "src/"
        })
        .pipe(imagemin())
        .pipe(gulp.dest("dist/"));
});

gulp.task("default", ["sass", "server", "watch"]);