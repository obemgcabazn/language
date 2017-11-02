var gulp          = require('gulp'),
    livereload    = require('gulp-livereload'),
    pug           = require('gulp-pug');


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch( 'frontend/*.pug', gulp.series( 'pug' ) );
    gulp.watch( 'public/*.html').on('change', livereload.changed);
    gulp.watch( 'public/*.js' ).on('change', livereload.changed);
});

gulp.task('pug', function (){
    return gulp.src( 'frontend/index.pug' )
        .pipe( pug( {pretty: true} ) )
        .pipe( gulp.dest( 'public/' ) )
});

gulp.task(
    'default',
    gulp.parallel(
        'pug',
        'watch'
    )
);