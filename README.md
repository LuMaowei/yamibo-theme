# Yamibo Theme (百合会论坛主题助手)

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/LuMaowei/yamibo-theme.git)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![react](https://img.shields.io/badge/react-19-blue)
![vite](https://img.shields.io/badge/vite-7-purple)

**Yamibo Theme** 是一款专为百合会论坛 (https://bbs.yamibo.com/) 设计的浏览器扩展，旨在通过现代化的 UI
调整，为坛友工作摸鱼时提供更加舒适的阅读体验。

---

## ✨ 主要功能

- 🎨 **主题切换**：内置多种配色方案，随心变换。
- 🌙 **暗黑模式**：完美的夜间适配，保护视力，拒绝深夜“致盲”。
- 📖 **沉浸式阅读**：优化帖子详情页布局，去除论坛交互元素，专注于文字内容。
- ⚡ **轻量高效**：基于 React 19 与 Vite 开发，极致的响应速度。

## ✨ 待办

-[x] 沉浸式阅读
    - 仿antd风格，去除页面顶部横幅、楼层左侧信息等无关元素
-[ ] 添加更多主题方案
-[ ] 添加暗黑模式
-[ ] 完善沉浸式阅读
-[ ] 整理样式选择器，方便后续开发

## 🛠️ 技术栈

本项目基于以下现代前端工具链构建：

- **框架**: [React 19](https://react.dev/)
- **构建工具**: [Vite 7](https://vitejs.dev/) + [@crxjs/vite-plugin](https://crxjs.dev/vite-plugin/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **代码规范**: [Biome](https://biomejs.dev/)

## 🚀 开发与构建

### 准备工作

确保你已安装了 [Node.js](https://nodejs.org/) 和 [Yarn](https://yarnpkg.com/)。

### 1. 克隆项目

```bash
git clone [https://github.com/LuMaowei/yamibo-theme.git](https://github.com/LuMaowei/yamibo-theme.git)
cd yamibo-theme
```

### 2. 安装依赖

```bash
yarn install
```

### 3. 开发模式 (热更新)

```bash
yarn dev
```

运行后，在 Chrome 浏览器中打开 chrome://extensions/，开启“开发者模式”，选择“加载已解压的扩展程序”，并指向项目的 dist 文件夹。

### 4. 生产构建

```Bash
yarn build
```

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request 来改进主题样式。