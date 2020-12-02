## 为什么不选第三方框架
例如 `WePY`、`Mpvue`、`uni-app`、`Taro`、`Mpx`，这些框架bug层出不穷，开发者频繁跑路、放弃更新😂

其实原生小程序越来越向主流前端靠拢，以前没有的一些功能现在都慢慢支持了，比如：组件化、NPM、Promise、ES6、TypeScript。

总之为了省心咱们还是直接用原生吧。

## 目标
- [x] 实时编译less，转成wxss
- [x] ESLint代码检查
- [x] 图片压缩（可以添加白名单不压缩）
- [ ] 删除文件的优化（目前的复制是覆盖，watch不到删除）
- [ ] 配置文件路径别名 `alias`
- [x] 自适应 `px2rpx`
- [ ] 环境变量
- [ ] 自动切换接口环境
- [ ] `npm run` 命令代替 `gulp` 命令
- [ ] webview
- [ ] 使用命令行快速创建page、template和component
- [ ] 完善项目功能...

## 参考
- https://mp.weixin.qq.com/s/SMpIlNEgBzxT_4b4ySvIUg
- https://mp.weixin.qq.com/s/BZdpr6Ay-CXjCfodh-9-9w
- https://github.com/simplte/gulp-mini
- https://www.jianshu.com/p/11cc03dd1917
- https://github.com/YangQiGitHub/wx-miniprogram-boilerplate
- https://www.bilibili.com/video/BV1yK4y1e7tS?from=search&seid=16155885605994342562
- https://www.cnblogs.com/kevoin/p/9890100.html
- https://www.cnblogs.com/fozero/p/8994464.html

## 备注
Code generators to speed up development