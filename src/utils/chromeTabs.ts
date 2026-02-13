import { MessageType, type ThemeEnableMessage } from '@/types/message';

export async function sendThemeEnableMessage(enabled: boolean) {
  return new Promise<void>((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0]?.id;
      if (!tabId) return resolve();
      chrome.tabs.sendMessage(tabId, {
        type: MessageType.themeEnable,
        value: enabled,
      });
      resolve();
    });
  });
}

export function chromeRuntimeMessageListener(callback: (message: ThemeEnableMessage) => void) {
  chrome.runtime.onMessage.addListener((message: ThemeEnableMessage) => {
    callback(message);
  });
}
