import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: '百合会论坛主题',
  description: packageJson.description,
  version: packageJson.version,
  version_name: packageJson.version,

  icons: {
    '16': 'src/assets/icons/icon16.png',
    '48': 'src/assets/icons/icon48.png',
    '128': 'src/assets/icons/icon128.png',
  },

  action: {
    default_popup: 'index.html',
    default_icon: {
      '16': 'src/assets/icons/icon16.png',
      '48': 'src/assets/icons/icon48.png',
    },
  },

  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },

  content_scripts: [
    {
      matches: ['https://bbs.yamibo.com/*'],
      js: ['src/content/index.tsx'],
      run_at: 'document_start',
    },
  ],

  permissions: [
    'storage',
    'activeTab',
    // "tabs",
    // "scripting",
  ],

  host_permissions: [
    // '<all_urls>', // 谨慎使用，只在必要时申请
    'https://bbs.yamibo.com/*',
    'http://localhost/*',
  ],

  // -------- 选项页面 --------
  // options_page: 'options.html', // 如果有选项页面，指向其 HTML

  // -------- 网页可访问资源 --------
  // web_accessible_resources: [
  //   {
  //     resources: ['src/assets/*'], // 如果需要在页面上直接访问资源
  //     matches: ['<all_urls>'],
  //   },
  // ],
});
