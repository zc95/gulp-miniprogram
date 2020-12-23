// 初始化模块
const gulp = require('gulp');
const less = require('gulp-less'); // 编译less
const del = require('del'); // 删除
const rename = require('gulp-rename'); // 重命名模块
const eslint = require('gulp-eslint'); // eslint
const imagemin = require('gulp-imagemin'); // 压缩图片模块
const px2rpx = require('gulp-px2rpx'); // px转rpx
const aliases = require('gulp-wechat-weapp-src-alisa'); // 别名模块

// 定义一些路径
const srcPath = 'src/**/';
const distPath = 'dist/';
const filePath = {
  wxmlFiles: [`${srcPath}*.wxml`],
  jsonFiles: [`${srcPath}*.json`],
  lessFiles: [`${srcPath}*.less`, `${srcPath}*.wxss`],
  jsFiles: [`${srcPath}*.js`],
  imgFiles: [`${srcPath}/assets/images/**/*.*`]
}

// wxml【别名、复制】
function dealWxml () {
  return gulp.src(filePath.wxmlFiles)
    .pipe(aliases({ '@': 'src' }))
    .pipe(gulp.dest(distPath));
}

// json【直接复制】
function dealJson () {
  return gulp.src(filePath.jsonFiles)
    .pipe(gulp.dest(distPath));
}

// less【编译成wxss、别名、px2rpx、复制】
function dealLess () {
  return gulp.src(filePath.lessFiles)
    .pipe(less())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(aliases({ '@': 'src' }))
    .pipe(px2rpx({
      screenWidth: 375,
      wxappScreenWidth: 750,
      remPrecision: 6
    }))
    .pipe(gulp.dest(distPath));
}

// js【eslint、别名】
function dealJs () {
  return gulp.src(filePath.jsFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(aliases({ '@': 'src' }))
    .pipe(gulp.dest(distPath));
}

// img【压缩】
function dealImg () {
  return gulp.src(filePath.imgFiles)
    .pipe(imagemin({
      interlaced: true, //隔行扫描压缩jqp图片
      optimizationLevel: 5, //0-7
      progressive: true, //无损压缩jpg
      multipass: true //多次优化svg直到最优
    }))
    .pipe(gulp.dest(distPath))
}

// 清除dist目录
function cleanDist () {
  return del(distPath);
}

// 监听文件
function watchFiles () {
  gulp.watch(filePath.wxmlFiles, dealWxml);
  gulp.watch(filePath.lessFiles, dealLess);
  gulp.watch(filePath.jsFiles, dealJs);
  gulp.watch(filePath.imgFiles, dealImg);
  gulp.watch(filePath.jsonFiles, dealJson);
}

// 默认
gulp.task('default',
  gulp.series(
    cleanDist,
    gulp.parallel(dealWxml, dealLess, dealJs, dealImg, dealJson),
    watchFiles
  )
)