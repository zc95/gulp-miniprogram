## 更新
别名模块好像有了新的选择，gulp-miniprogram-path-alias，暂时还没时间去看。

## 为什么不选第三方框架
例如 `WePY`、`Mpvue`、`uni-app`、`Taro`、`Mpx`，这些框架bug层出不穷，开发者频繁跑路、放弃更新😂

其实原生小程序越来越向主流前端靠拢，以前没有的一些功能现在都慢慢支持了，比如：组件化、NPM、Promise、ES6、TypeScript。

总之为了省心咱们还是直接用原生吧。

## 目标
- [x] 实时编译less，转成wxss
- [x] ESLint代码检查
- [x] 图片压缩（可以添加白名单不压缩）
- [ ] 删除文件的优化（目前的复制是覆盖，watch不到删除）
- [x] 配置文件路径别名 `alias`
- [x] 自适应 `px2rpx`
- [ ] 环境变量
- [ ] 自动切换接口环境
- [ ] `npm run` 命令代替 `gulp` 命令
- [ ] webview
- [ ] request封装
- [ ] abort取消请求
- [ ] 使用命令行快速创建page、template和component
- [ ] 完善项目功能...

## 备注
Code generators to speed up development
