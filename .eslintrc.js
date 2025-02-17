module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  },
  parser: "babel-eslint",
  rules: {
    "arrow-parens": 0, // 要求箭头函数的参数使用圆括号
    "generator-star-spacing": 0,
    "template-curly-spacing": 0, // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    indent: ['error', 2], // 强制使用一致的缩进
    semi: [0, "never"], // 使用分号代替 ASI
    "spaced-comment": 0, // 注释后加空格
    quotes: 0, // 引号 单引号双引号
    camelcase: 0, // 驼峰
    "space-before-function-paren": 0, // 方法前加空格
    eqeqeq: 0, // 全等于
    "no-unused-vars": 0, // 未使用变量
    "space-unary-ops": 0, // 一元运算符后面跟一个空格
    "operator-linebreak": 0, // 强制操作符使用一致的换行符风格
    "keyword-spacing": 0, // 强制在关键字前后使用一致的空格
    "object-curly-spacing": 0, // 强制在花括号中使用一致的空格
    "prefer-const": [
      1,
      {
        ignoreReadBeforeAssign: false
      }
    ],
  },
  // 下列全局变量不能被定义且重新赋值
  globals: {
    getApp: false,
    Page: false,
    wx: false,
    App: false,
    getCurrentPages: false,
    Component: false
  }
};
