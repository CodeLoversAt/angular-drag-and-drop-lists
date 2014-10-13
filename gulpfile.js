"use strict";

var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    rename = require('gulp-rename'),
    uglifySaveLicense = require('uglify-save-license');

gulp.task('build', function () {
    return gulp.src(['angular-drag-and-drop-lists.js'])
        .pipe(uglify({
            compress: true,
            outSourceMap: 'angular-drag-and-drop-lists.min.map',
            preserveComments: uglifySaveLicense
        }))
        .pipe(rename(function(path) {
            if ('.js' === path.extname) {
                path.extname = '.min' + path.extname;
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['build']);