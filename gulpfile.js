// 初始化模块
const gulp = require("gulp");
const less = require("gulp-less");
const del = require('del');
const gulpif = require('gulp-if');
const rename = require("gulp-rename");
const eslint = require('gulp-eslint');
const imagemin = require('gulp-imagemin');
const px2rpx = require('gulp-px2rpx');

// 基础路径（工作路径、产出路径）
const srcPath = './src/**';
const filePath = {
    wxmlFiles: [`${srcPath}/*.wxml`],
    lessFiles: [`${srcPath}/*.less`, `${srcPath}/*.wxss`],
    jsFiles: [`${srcPath}/*.js`, `!./src/env/*.js`],
    jsonFiles: [`${srcPath}/*.json`],
    imgFiles: [`${srcPath}/images/**/*.*`]
}
const distPath = './dist/'; // 产出路径

// 编译wxml文件
const wxml = () => {
    return gulp.src(filePath.wxmlFiles, { since: gulp.lastRun(wxml) })
        .pipe(gulp.dest(distPath));
};
gulp.task(wxml);

// 编译less文件
const isLess = (file) => {
    return Object.is(file.extname, '.less');
};
const compileLess = () => {
    return gulp.src(filePath.lessFiles, { since: gulp.lastRun(compileLess) })
        .pipe(gulpif(isLess, less()))
        .pipe(px2rpx({
            screenWidth: 375,
            wxappScreenWidth: 750,
            remPrecision: 6
        }))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(gulp.dest(distPath));
};
gulp.task(compileLess);

// 编译js文件
const js = () => {
    return gulp.src(filePath.jsFiles, { since: gulp.lastRun(js) })
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulp.dest(distPath));
};
gulp.task(js);

// 编译json文件
const json = () => {
    return gulp.src(filePath.jsonFiles, { since: gulp.lastRun(json) })
        .pipe(gulp.dest(distPath));
};
gulp.task(json);

// 编译图片
const img = () => {
    return gulp.src(filePath.imgFiles, { since: gulp.lastRun(img) })
        .pipe(imagemin())
        .pipe(gulp.dest(distPath))
};
gulp.task(img);

// 清除build目录下的所有文件
gulp.task('clean', done => {
    del.sync(['dist/**/*']);
    done();
});

// 监听文件
gulp.task('watch', () => {
    gulp.watch(filePath.wxmlFiles, wxml);
    gulp.watch(filePath.lessFiles, compileLess);
    gulp.watch(filePath.jsFiles, js);
    gulp.watch(filePath.jsonFiles, json);
    gulp.watch(filePath.imgFiles, img);
});

// development环境
gulp.task('dev',
    gulp.series(
        'clean',
        gulp.parallel('wxml', 'compileLess', 'js', 'json', 'img'),
        'watch'
    )
)