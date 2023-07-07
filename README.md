# 小程序页面布局模板
## 概述
本模板 UI 组件库使用 [vant](https://vant-contrib.gitee.io/vant-weapp/#/home)

本模板推荐使用原子 CSS 来实现组件库外的样式，原子 CSS 实现方案为[UnoCSS](https://unocss.dev/)([中文](https://alfred-skyblue.github.io/unocss-docs-cn/))

## 文件命名规范
1. 请使用驼峰式命名法（小写字母开头，连接单词大写开头），如 pageName
2. 小程序页面名使用业务名称，不使用index为名称，如有页面cart，它的结构如下

```txt
/pages/cart/cart.js
           cart.json
           cart.wxml
           cart.wxss
```

## UI库-Vant
### 安装使用
1. 安装依赖包
`npm install`

2. 在页面的 json 配置文件中引入组件
```
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

3. 生成小程序的包引用文件

点击菜单**工具**，再点**构建 npm**（注意，每次引用新的组件，都要重复此步骤）

4. 在页面中使用
```html
  <van-button type="primary">{{motto}}</van-button>
```

5. Vant 库样式自定义

建议在全局样式文件 app.wxss 中声明 Vant 库的 CSS 变量值，具体变量名称可查阅 Vant 库[文档](https://vant-contrib.gitee.io/vant-weapp/#/theme)或[源代码](https://github.com/youzan/vant-weapp/tree/dev/packages)
```css
page {
  background: white;
  --main-color: #e49648;
  --button-primary-background-color: var(--main-color);
  --button-primary-border-color: var(--main-color);
}
```

## CSS
### 规范

请优先使用 vant-ui 库和 unocss 支持的 tailwind 原子类，实现不了再手写 css 实现。如无特殊情况不要使用 style（vant库组件的custom-style除外）


### UnoCSS
UnoCSS 是即时按需的原子级CSS引擎，它兼容[tailwindcss](https://tailwindcss.com/docs/customizing-colors)([中文](https://www.tailwindcss.cn/docs))

如下示例中使用的 class 值 "mt-8"，即代表一条原子样式 `margin-top: 64px;`

```html
<div class="mt-8"></div>
```

### 开发阶段 build css
执行 `npm run unocss` 将监听文件改动，并生成 unocss.wxss，在 app.wxss 中导入即可生效（本模板已导入)

### 生产 build
执行 `npm run unocss:build`

### 使用图标
UnoCSS 支持使用 class 来展示图标，图标支持单色（可指定颜色）与多色

如下示例中使用 class 值 "i-mdi-alarm" 来展示闹钟图标，并通过 class 值 "text-orange-400" 设置图标颜色

```html
<div class="i-mdi-alarm text-orange-400" ></div>
```

本模板已内置 Material Design Icons，包含的图标请查看 https://icones.js.org/collection/mdi

如需安装更多图标集合（UnoCSS只会打包已使用的，不用担心大小），使用使用 `npm install -D @iconify-json/集合名` 即可，无须额外配置。

####
常见图标集合有：
* @iconify-json/tabler https://tabler-icons.io/
* 更多图标集合 https://icones.js.org/ 或 https://icones.js.org/
* 包名查找 https://www.npmjs.com/search?q=%40iconify-json

## javascript 规范
* 小程序开发者工具安装 eslint 扩展以方便编辑器提示 eslint 错误
* 请符合项目配置的 eslint 规范，规范未覆盖到的，也请保持一致性

## wxml 规范
* 请总是使用双引号来声明属性值，属性值太多导致太长可分行展示，但一行只能展示一个
* 请保持排版一致，空行只用来分隔模块，不超过2行


