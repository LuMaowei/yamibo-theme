import { type ExtensionStorage, StorageKeys } from '@/types/storage';

export const storage = {
  async getThemeEnable(): Promise<boolean> {
    return new Promise((resolve) => {
      chrome.storage.sync.get([StorageKeys.themeEnable], (result: Partial<ExtensionStorage>) => {
        resolve(result.themeEnable ?? true);
      });
    });
  },

  async setThemeEnable(value: boolean): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.sync.set({ [StorageKeys.themeEnable]: value }, () => resolve());
    });
  },
};
