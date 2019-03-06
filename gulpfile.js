var gulp = require('gulp');


//----------------------------------//
//  Browser Sync To reload Server   //
//----------------------------------//
const browserSync = require('browser-sync');
function serve() {
  return browserSync.init({
    server: true,
    open: true,
    port: 3000
  });
}


function copy() {
  return gulp.src([
    './src/*.html',
    './src/**/*.jpg',
    './src/**/*.css',
    './src/**/*.js'
  ])
  .pipe(gulp.dest('./'));
}

gulp.task('copy', copy);
gulp.task('serve', gulp.series(copy, serve));
