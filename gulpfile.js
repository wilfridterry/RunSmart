const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: "src"
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
            .pipe(gulp.dest('src/css'))
            .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src("src/sass/**/*.js")
            .pipe(gulp.dest('src/js'))
            .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch("src/sass/**/*.+(scss|sass|js)", gulp.parallel('styles', 'scripts'));
    gulp.watch('src/*.html').on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts'));