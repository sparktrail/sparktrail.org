var gulp         = require('gulp')
    stylus       = require('gulp-stylus')
    autoprefixer = require('gulp-autoprefixer')

gulp.task('stylus', function() {
  gulp.src('src/stylus/style.styl')
  .pipe(stylus())
  .pipe(autoprefixer({
    browsers: ['last 20 versions']
  }))
  .pipe(gulp.dest('static/css'))
})

gulp.task('watch', ['stylus'], function() {
  gulp.watch('src/stylus/**/*', ['stylus'])
})
