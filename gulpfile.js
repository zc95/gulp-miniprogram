// 初始化模块
const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const clean = require('gulp-clean'); // 清除文件夹内容模块
const gulpif = require('gulp-if'); // gulp管道中判断的模块
const rename = require('gulp-rename'); // 重命名模块
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin'); // 压缩图片模块
const px2rpx = require('gulp-px2rpx');
const aliases = require('gulp-wechat-weapp-src-alisa'); // 别名模块
const pump = require('pump');
const preprocess = require("gulp-preprocess");

// 定义一些路径
const srcPath = 'src/**';
const distPath = 'dist/';
const filePath = {
    wxmlFiles: [`${srcPath}/*.wxml`], // 直接复制 wxml
    jsonFiles: [`${srcPath}/*.json`], // 直接复制 json
    lessFiles: [`${srcPath}/*.less`, `${srcPath}/*.wxss`], // less转成wxss、px转rpx
    jsFiles: [`${srcPath}/*.js`, `!src/config/*.js`], // js加个eslint验证
    imgFiles: [`${srcPath}/assets/images/**/*.*`] // 图片压缩一下
}

// 直接复制 wxml
function dealWxml() {
    return gulp.src(filePath.wxmlFiles, {base: 'src'})
    .pipe(aliases({ '@': 'src' }))
    .pipe(gulp.dest(distPath));
}

// 编译less文件
function dealLess() {
    const isLess = (file) => {
        return Object.is(file.extname, '.less');
    };
    return gulp.src(filePath.lessFiles, {base: 'src'})
        .pipe(aliases({ '@': 'src' }))
        .pipe(gulpif(isLess, less()))
        .pipe(px2rpx({
            screenWidth: 375,
            wxappScreenWidth: 750,
            remPrecision: 6
        }))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(gulp.dest(distPath));
}

// 编译js文件
function dealJs() {
    return gulp.src(filePath.jsFiles, {base: 'src'})
        .pipe(eslint())
        .pipe(aliases({ '@': 'src' }))
        .pipe(eslint.format())
        .pipe(gulp.dest(distPath));
}

// 压缩图片
function dealImg() {
    return gulp.src(filePath.imgFiles, {base: 'src'})
    .pipe(imagemin({
        interlaced: true, //隔行扫描压缩jqp图片
        optimizationLevel: 5, //0-7
        progressive: true, //无损压缩jpg
        multipass: true //多次优化svg直到最优
    }))
    .pipe(gulp.dest(distPath))
}

// 直接复制 json
function dealJson() {
    return gulp.src(filePath.jsonFiles, {base: 'src'})
        .pipe(gulp.dest(distPath));
}

// 预设置环境变量
function environment() {
    return gulp.src(['src/config/environment.js'], {base: 'src'})
    .pipe(preprocess({
        context: {
            NODE_ENV: process.env.NODE_ENV || 'development',
          },
    }))
    .pipe(gulp.dest(distPath));
}

// 延迟500后，auto监听编写的代码的改变（实时执行编译小程序代码）
function depleyPages(cb) {
    setTimeout(function(){
        cb()
    }, 500);
}

// 清除dist目录
function cleanDist(cb) {
    pump([
        gulp.src('dist',{allowEmpty: true}),
        clean()
    ], cb)
}

// 监听文件
function watchFiles() {
    gulp.watch(filePath.wxmlFiles, dealWxml);
    gulp.watch(filePath.lessFiles, dealLess);
    gulp.watch(filePath.jsFiles, dealJs);
    gulp.watch(filePath.imgFiles, dealImg);
    gulp.watch(filePath.jsonFiles, dealJson);
}

// development环境
gulp.task('dev',
    gulp.series(
        cleanDist,
        environment,
        gulp.parallel(dealWxml, dealLess, dealJs, dealImg, dealJson),
        depleyPages,
        watchFiles
    )
)