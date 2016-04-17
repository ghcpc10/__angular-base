var gulp = require('gulp'),
    del = require('del'),
    fs = require('fs');


gulp.task('clean', function(callback) {
  del(['./build'], {force: true}, callback);
});

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
  require('./gulp/'+task);
});


gulp.task('build', ['clean', 'styles', 'scripts', 'html', 'nodemon']);
gulp.task('serve', ['clean', 'styles', 'scripts', 'html', 'nodemon'], function() {
  gulp.watch('client/src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('client/src/{app,components}/**/*.js', ['scripts']);
});