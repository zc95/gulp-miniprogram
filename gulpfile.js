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