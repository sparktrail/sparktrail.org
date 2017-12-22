var gulp         = require('gulp')
    stylus       = require('gulp-stylus')
    autoprefixer = require('gulp-autoprefixer')
    sourcemaps   = require('gulp-sourcemaps')

gulp.task('stylus', function() {
  gulp.src('src/stylus/style.styl')
  .pipe(sourcemaps.init())
  .pipe(stylus())
  .pipe(autoprefixer({
    browsers: ['last 20 versions']
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('static/css/build'))
})

gulp.task('watch', ['stylus'], function() {
  gulp.watch('src/stylus/**/*', ['stylus'])
})

gulp.task('build', ['stylus'], function() {})
