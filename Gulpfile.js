
var bower       = require('gulp-bower');
var browserify  = require('browserify');
var debowerify  = require('debowerify');
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');

gulp.task('default', ['js', 'css', 'html']);

gulp.task('bower', function(){ return bower(); });
gulp.task('vendor', ['bower'], function(){
    // return browserify()
    //     .require('./bower_components/pixi/bin/pixi.js')
    //     .bundle()
    //     .pipe(source('vendor.js'))
    //     .pipe(gulp.dest('./client/build/js'));
});

gulp.task('js', ['vendor'], function(){
    var b = browserify('./client/js/main.js');
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./client/build/js'));
});

gulp.task('css');
gulp.task('html');
