var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep'),
    angularFilesort = require('gulp-angular-filesort');







// styles
gulp.task('styles', function() {
  gulp.src('./client/src/{app,components}/**/*.scss')
    .pipe(concat('app.css'))
    .pipe(sass({outputStyle: 'nested'})
      .on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:styles', function() {
  gulp.src('./client/src/{app,components}/**/*.scss')
    .pipe(concat('app.css'))
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});






// scripts
gulp.task('scripts', function() {
  gulp.src('./client/src/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});


// babel
gulp.task('babelClientScripts', function() {
  var components = {
    'ng-pcln-elastic-search': {
      path: 'client/src/bower_components/',
      src: '/src/',
      dest: '/'
    }
  };

  for (var key in components) {
    var value = components[key],
      finalName = key + '.min.js',
      compSrc = value.path + key + value.src + '*.js',
      compDest = value.path + key + value.dest;

    gulp.src(compSrc)
      .pipe(babel())
      .pipe(concat(finalName))
      .pipe(uglify({mangle: false}))
      .pipe(gulp.dest(compDest));
  }
});




// html
gulp.task('html', function() {
  var cssPaths,
      scriptPaths,
      bowerDeps;

  cssPaths = [
    './client/src/bower_components/**/*.min.css',
    './dist/*.css'
  ];

  scriptPaths = [
    './client/src/app/**/*.js'
  ];

  bowerDeps = wiredep({
    cwd: './client',
    directory: 'client/src/bower_components',
    dependencies: true,
    devDependencies: false
  });


  return gulp.src('./server/views/index-template.html')
    .pipe(rename('index.html'))
    .pipe(inject(gulp.src(cssPaths), {
      addPrefix: '',
      ignorePath: 'dist',
      starttag: '<!-- inject:css -->',
      endtag: '<!-- endinject -->'
    }))
    .pipe(inject(
      gulp.src(bowerDeps.js.reverse()).pipe(angularFilesort()), {
        addPrefix: '',
        ignorePath: 'client',
        starttag: '<!-- inject:js (vendor) -->',
        endtag: '<!-- endinject -->'
    }))
    .pipe(inject(
      gulp.src(scriptPaths).pipe(angularFilesort()), {
        addPrefix: '',
        ignorePath: 'client',
        starttag: '<!-- inject:js (app) -->',
        endtag: '<!-- endinject -->'
    }))
    .pipe(gulp.dest('./server/views'));
});
