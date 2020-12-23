// 初始化模块
const gulp = require('gulp');
const del = require('del');

// 定义一些路径
const srcPath = 'src/**';
const distPath = 'dist/';
const filePath = {
  wxmlFiles: [`${srcPath}/*.wxml`],
  jsonFiles: [`${srcPath}/*.json`],
  lessFiles: [`${srcPath}/*.less`, `${srcPath}/*.wxss`],
  jsFiles: [`${srcPath}/*.js`],
  imgFiles: [`${srcPath}/assets/images/*.*`]
}

// 直接复制 wxml
function dealWxml () {
  return gulp.src(filePath.wxmlFiles)
    .pipe(gulp.dest(distPath))
}

// 直接复制 json
function dealJson () {
  return gulp.src(filePath.jsonFiles)
    .pipe(gulp.dest(distPath))
}

// 编译less文件
function dealLess () {
  return gulp.src(filePath.lessFiles)
    .pipe(gulp.dest(distPath))
}

// js加个eslint验证、路径别名
function dealJs () {
  return gulp.src(filePath.jsFiles)
    .pipe(gulp.dest(distPath))
}

// 压缩图片
function dealImg () {
  return gulp.src(filePath.imgFiles)
    .pipe(gulp.dest(distPath))
}

// 清除dist目录
function cleanDist() {
  return del(distPath);
}

// 监听文件
function watchFiles () {

}

// 默认
gulp.task('default',
  gulp.series(
    cleanDist,
    gulp.parallel(dealWxml, dealLess, dealJson, dealJs, dealImg)
  )
)