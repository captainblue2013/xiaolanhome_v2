/**
 * Created by lanhao on 16/5/30.
 */
var gulp = require('gulp');
var less = less = require("gulp-less");
var uglify = require("gulp-uglify");
var replace = require("gulp-replace");
var fs = require('fs');

gulp.task('default', function() {
    console.log('gulp start');
    gulp.run('all');
    gulp.watch('views/**/*', function () {
        console.log('build');
        gulp.run('all');
    });
});
gulp.task('all', function () {
    gulp.src(['views/css.src/*.less'])
        .pipe(less({
            compress: true
        }))
        .pipe(gulp.dest('views/css'));
    gulp.src(['views/js.src/*.js'])
        .pipe(uglify({
            mangle: false,
            preserveComments: function(o, info) {
                return /@(cc_on|if|else|end|_jscript(_\w+)?)\s/i.test(info.value);
            }
        }))
        .pipe(gulp.dest('views/js'));
});