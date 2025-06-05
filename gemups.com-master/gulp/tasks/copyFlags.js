export const copyFlags = () => {
   return app.gulp.src('node_modules/flag-icon-css/flags/**/*')
      .pipe(app.gulp.dest('dist/flags'));
};