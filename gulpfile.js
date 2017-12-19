const gulp = require('gulp')
const uglify = require('gulp-uglify')
const pump = require('pump')

gulp.task('minjs', function () {
  pump([
        gulp.src('./source/*.js'),
        uglify(),
        gulp.dest('./')
    ],
  )
})

gulp.task('default', ['minjs'])
