// 1. 立即注入一段“阻塞式”内联 CSS，强制隐藏还没渲染的页面
const injectBlockingStyle = () => {
  const style = document.createElement('style');
  style.id = 'theme-prevent-flash';
  // 这里的颜色填你主题的主背景色
  style.textContent = `
    html { 
      visibility: hidden !important; 
    }
  `;
  document.documentElement.appendChild(style);
};

injectBlockingStyle();

import './theme.css';

const THEME_CLASS = 'antd-theme';
const html = document.documentElement;

// 应用主题
function applyTheme(enabled: boolean) {
  if (enabled) {
    html.classList.add(THEME_CLASS);
  } else {
    html.classList.remove(THEME_CLASS);
  }
}

// 页面加载时读取状态
chrome.storage.local.get(['themeEnabled'], (result: { themeEnabled: boolean }) => {
  const enabled = result.themeEnabled ?? true;
  applyTheme(enabled);
  const blocker = document.getElementById('theme-prevent-flash');
  if (blocker) {
    // 稍微延迟一点点释放（比如 10ms），确保 CSS 已经渲染
    setTimeout(() => {
      blocker.remove();
      document.documentElement.style.visibility = 'visible';
    }, 0);
  }
});

// 监听 popup 发来的切换消息
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'TOGGLE_THEME') {
    applyTheme(message.enabled);
  }
});
