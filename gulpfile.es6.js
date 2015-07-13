let gulp = require('gulp');
let babel = require('gulp-babel');
let watch = require('gulp-watch');
let rename = require('gulp-rename');

gulp.task('default', () => {
  return gulp.src('*.es6.js')
    .pipe(watch('*.es6.js'))
    .pipe(babel())
    .pipe(rename( (path) => {
      path.basename = path.basename.replace('.es6','');
      path.extname = '.js';
    }))
    .pipe(gulp.dest('.'));
});
