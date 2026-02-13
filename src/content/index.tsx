import { MessageType } from '@/types/message';
import { ThemeNames } from '@/types/theme.ts';
import { storage } from '@/utils/chromeStorage.ts';
import { chromeRuntimeMessageListener } from '@/utils/chromeTabs';
import './theme-antd.css';

const html = document.documentElement;

function applyTheme(enabled: boolean) {
  if (enabled) {
    html.classList.add(ThemeNames.antd);
  } else {
    html.classList.remove(ThemeNames.antd);
  }
}

storage.getThemeEnable().then((value) => {
  applyTheme(value);
});

chromeRuntimeMessageListener((message) => {
  if (message.type === MessageType.themeEnable) {
    applyTheme(message.value);
  }
});
