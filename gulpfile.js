'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp.src('*.es6.js').pipe(babel()).pipe(watch('*.es6.js')).pipe(rename(function (path) {
    path.basename = path.basename.slice(0, -4);
    path.extname = '.js';
  })).pipe(gulp.dest('.'));
});