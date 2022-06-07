const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('styles', () => {
    return gulp.src("src/sass/style.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min"
            }))
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src("src/sass/**/*.js")
            .pipe(gulp.dest('dist/js'))
            .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch("src/sass/**/*.+(scss|sass|js|css)", gulp.parallel('styles', 'scripts'));
    gulp.watch('src/*.html').on("change", gulp.parallel('html'));
});

gulp.task('html', () => {
    return gulp.src("src/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/"));
});

gulp.task('fonts', () => {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', () => {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('images', () => {
    return gulp.src("src/img/**/*")
        // .pipe(imagemin())
        .pipe(gulp.dest("dist/img/"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'images', 'html'));