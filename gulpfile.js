// 初始化模块
const gulp = require('gulp');

// 定义一些路径
const srcPath = '';
const distPath = '';
const filePath = {
  wxmlFiles: [],
  jsonFiles: [],
  lessFiles: [,],
  jsFiles: [],
  imgFiles: []
}

// wxml【别名、复制】
function dealWxml () {
}

// json【直接复制】
function dealJson () {
}

// less【编译成wxss、别名、px2rpx、复制】
function dealLess () {
}

// js【eslint、别名】
function dealJs () {
}

// img【压缩】
function dealImg () {
}

// 清除dist目录
function cleanDist () {
}

// 监听文件
function watchFiles () {
}

// 默认
gulp.task('default',
)