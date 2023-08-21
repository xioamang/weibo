module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    // 自动启用 es6 语法 ，并启用es6 全局变量
    es6: true
  },
  globals: {
    window: true
  },
  // plugin 省略了 eslint-plugin 前缀
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  // 解析器选项
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    eqeqeq: 2
  }
}
