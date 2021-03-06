'use strict';

module.exports = function() {
 $.gulp.task('sprite:png', function () {
  var spriteData = $.gulp.src('./source/sprite/*.png')
  .pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    imgPath: '../img/sprite.png',
    padding: 25,
    algorithm: 'top-down'
    
   }));
   		  spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img'));
   return spriteData.css.pipe($.gulp.dest('./source/style/common'));
});
};



