const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile sass to css
gulp.task('sass', () => {
  return gulp
    .src('../../src/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('../../src/scss'));
});

// Watch for file changes
gulp.task('watch', () => {
  gulp.watch('../../src/scss/**/*.scss', gulp.series(['sass']));
});
