var gulp         = require('gulp')
    stylus       = require('gulp-stylus')
    autoprefixer = require('gulp-autoprefixer')
    sourcemaps   = require('gulp-sourcemaps')
    chalk        = require('chalk')

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

gulp.task('stylus:dev', function() {
  // Logs stylus errors to console instead of crashing
  gulp.src('src/stylus/style.styl')
  .pipe(stylus())
  .on('error', function (err) {
    process.stdout.write(chalk.red.inverse('\n ERROR ') + chalk.red(' Failed to compile.\n\n'))

    const lines = err.message.split('\n');
    // Make the file easier to read
    lines.splice(0, 1, chalk.blue(lines[0]) + '\n');
    // Insert the error descrption below the file
    lines.splice(1, 0, err.stack.split('\n')[0] + '\n')
    // Strip the error description at the end
    lines.splice(lines.length -2, 1);

    process.stdout.write(lines.join('\n') + '\n');
    this.emit('end')
  })
  .pipe(autoprefixer({
    browsers: ['last 20 versions']
  }))
  .pipe(gulp.dest('static/css/build'))
});

gulp.task('watch', ['stylus'], function() {
  gulp.watch('src/stylus/**/*', ['stylus:dev'])
})

gulp.task('build', ['stylus'], function() {})
