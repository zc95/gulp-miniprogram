// 初始化模块
const gulp = require('gulp');

// 定义一些路径
const srcPath = 'src/**';
const distPath = 'dist/';
const filePath = {
    wxmlFiles: [], // 直接复制 wxml
    jsonFiles: [], // 直接复制 json
    lessFiles: [], // less转成wxss、px转rpx
    jsFiles: [], // js加个eslint验证、路径别名
    imgFiles: [] // 图片压缩一下
}

// 直接复制 wxml
function dealWxml() {
    
}

// 直接复制 json
function dealJson() {
  
}

// 编译less文件
function dealLess() {
    
}

// js加个eslint验证、路径别名
function dealJs() {
    
}

// 压缩图片
function dealImg() {
    
}

// 清除dist目录
function cleanDist(cb) {

}

// 监听文件
function watchFiles() {
    
}

// 默认
gulp.task('default',
    
)