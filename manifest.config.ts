import {defineManifest} from '@crxjs/vite-plugin'
import packageJson from './package.json' // 可以读取 package.json 的信息

export default defineManifest({
    manifest_version: 3,
    name: '百合会论坛主题',
    description: packageJson.description,
    version: packageJson.version, // 使用处理后的版本号
    version_name: packageJson.version, // 显示原始版本号

    // -------- 常规配置 --------
    icons: {
        '16': 'src/assets/icons/icon16.png', // 示例路径，确保图标存在
        '48': 'src/assets/icons/icon48.png',
        '128': 'src/assets/icons/icon128.png',
    },

    // -------- 定义插件的主要交互点 --------
    action: {
        default_popup: 'index.html', // 指向你的 Popup HTML 入口
        default_icon: { // 图标也需要在这里指定
            '16': 'src/assets/icons/icon16.png',
            '48': 'src/assets/icons/icon48.png',
        },
    },

    // -------- 后台脚本 (Service Worker) --------
    background: {
        service_worker: 'src/background/index.ts', // 指向你的后台脚本入口
        type: 'module', // 必须是 module 类型
    },

    // -------- 内容脚本 --------
    content_scripts: [
        {
            matches: ['https://bbs.yamibo.com/*'],
            js: ['src/content/index.tsx'], // 指向内容脚本入口
            run_at: 'document_start'
        },
    ],

    // -------- 网页可访问资源 --------
    // CRXJS 会自动处理脚本注入所需的资源，通常无需手动配置
    // web_accessible_resources: [
    //   {
    //     resources: ['src/assets/*'], // 如果需要在页面上直接访问资源
    //     matches: ['<all_urls>'],
    //   },
    // ],

    // -------- 权限声明 --------
    permissions: [
        'storage', // 示例：允许使用 chrome.storage
        'activeTab', // 示例：允许临时访问活动标签页
        // "tabs", // 按需添加
        // "scripting", // 如果需要通过 API 注入脚本或 CSS
    ],

    // -------- 主机权限 (Manifest V3 必须) --------
    host_permissions: [
        // '<all_urls>', // 谨慎使用，只在必要时申请
        'https://bbs.yamibo.com/*',
        'http://localhost/*'
    ],

    // -------- 选项页面 --------
    // options_page: 'options.html', // 如果有选项页面，指向其 HTML
})