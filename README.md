# 小程序页面布局模板
## 概述
本模板 UI 组件库使用 [vant](https://vant-contrib.gitee.io/vant-weapp/#/home)

本模板推荐使用原子 CSS 来实现组件库外的样式，原子 CSS 实现方案为[UnoCSS](https://unocss.dev/)([中文](https://alfred-skyblue.github.io/unocss-docs-cn/))

## Vant 库的使用
1. 在页面的 json 配置文件中引入组件
```
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```
2. 在页面中使用
```html
  <van-button type="primary">{{motto}}</van-button>
```

## 编译 CSS
### 开发阶段 build css
执行 `npm run unocss` 将监听文件改动，并生成 unocss.wxss，在 app.wxss 中导入即可生效（本模板已导入)

### 生产 build
执行 `npm run unocss:build`

## UnoCSS
UnoCSS 是即时按需的原子级CSS引擎，它兼容[tailwindcss](https://tailwindcss.com/docs/customizing-colors)([中文](https://www.tailwindcss.cn/docs))

如下示例中使用的 class 值 "mt-8"，即代表一条原子样式 `margin-top: 64px;`

```html
<div class="mt-8"></div>
```

## 使用图标
UnoCSS 支持使用 class 来展示图标，图标支持单色（可指定颜色）与多色

如下示例中使用 class 值 "i-mdi-alarm" 来展示闹钟图标，并通过 class 值 "text-orange-400" 设置图标颜色

```html
<div class="i-mdi-alarm text-orange-400" ></div>
```

本模板已内置 Material Design Icons，包含的图标请查看 https://icones.js.org/collection/mdi

如需安装更多图标集合（UnoCSS只会打包已使用的，不用担心大小），使用使用 `npm install -D @iconify-json/集合名` 即可，无须额外配置。

###
常见图标集合有：
* @iconify-json/tabler https://tabler-icons.io/
* 更多图标集合 https://icones.js.org/ 或 https://icones.js.org/
* 包名查找 https://www.npmjs.com/search?q=%40iconify-json

