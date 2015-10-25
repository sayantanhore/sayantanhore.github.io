// Gulpfile Task Runner

"use strict";

// Clear screen

var clear = require('clear');
clear();

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// Just checking

gulp.task('default', function(){
    try{
        console.log("Gulp is up and running");
    }
    catch(e){
        console.log(e);
    }
});

// Compile SASS to CSS

gulp.task('sass', function(){
    return sass('static/scss/*.scss')
            .on('error', sass.logError)
            .pipe(gulp.dest('static/css/'))
});

// Watch for SASS changes

gulp.task('watch', function(){
    console.log("Watching for SASS changes ...")
    gulp.watch('static/scss/*.scss', ['sass']);
});