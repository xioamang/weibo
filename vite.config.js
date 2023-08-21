import { defineConfig, loadEnv } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    // 项目根目录
    // root: '',
    // 项目部署基础路径
    base: env.VITE_PUBLIC_PATH || '/',
    // 静态资源服务文件夹
    publicDir: 'public',
    // 插件
    plugins: [createVuePlugin()],

    // devServer
    server: {
      proxy: {},
    },

    resolve: {
      // 别名
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
        {
          find: '~@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
      // 导入时，想要省略的扩展名列表
      extensions: ['.js', '.vue'],
    },
    css: {
      // 配置 css modules 的行为，选项将被传递给postcss-modules
      modules: {},
      // PostCSS 配置（格式同postcss.config.js）
      // postcss-load-config 的插件配置
      postcss: {},
      // 置顶传递给CSS预处理器的选项
      preprocessorOptions: {},
    },

    json: {
      // 是否支持从 `.json` 文件中进行按名导入
      // 若设置为true，导入的 JSON 将会被转换为 `export default JSON.parse("...")`
      // 会比转译成对象字面量性能更好，尤其是当 JSON 文件较大时。
      nameExports: true,
      // 开启此项，会禁用按名导入
      stringify: false,
    },

    // 继承自 esbuild 转换选项，最常见的用例是自定义 JSX
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import React from 'react'`,
    },

    // 静态资源处理: 字符串 | 正则表达式
    assetsInclude: '',
    // 调整控制台输出级别： 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    // 设置为 false 可以避免 Vite 清屏而错过在终端中打印的某些关键信息
    clearScreen: true,

    build: {
      // 浏览器兼容性  'esnext' | 'modules'
      target: 'modules',
      // 输出路径
      outDir: '../dist',
      // 生成静态资源存放路径
      assetsDir: '../assets',
      // 小于此阈值的导入或引用资源将内联为 base64 编码，以减少额外的http请求，
      // 设置为 0，可以完全禁用此项。
      assetsInlineLimit: 4096,
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 构建后是否生成 source map 文件
      sourcemap: false,
      // 自定义底层 Rollup 打包配置
      rollupOptions: {
        input: {},
        output: {},
      },
    },

    // @rollup/plugin-commonjs 插件选项
    commonjsOptions: {},

    // 构建的库
    // lib: {
    //   entry: string,
    //   name?: string,
    //   formats?: ('es' | 'cjs' | 'umd' | 'iife')[],
    //   fileName?: string
    // },

    // 当设置为 true，构建后将会生成 `mainifest.json` 文件
    manifest: false,

    // 设置为 false 可以禁用最小化混淆
    // 或是用来指定是应用哪种混淆器 boolean | 'terser' | 'esbuild'
    minify: 'terser',

    // 传递给 Terser 的更多 minify 选项
    terserOptions: {},

    // 设置为 false，用来禁用将构建好的文件写入磁盘
    write: true,

    // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,

    // 启用/禁用 brotli 压缩大小报告
    brotliSize: false,

    // chunk 大小警告限制
    chunkSizeWarningLimit: 500,
  })
}
