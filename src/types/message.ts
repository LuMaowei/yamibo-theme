export const MessageType = {
  themeEnable: 'themeEnable',
} as const;

export interface ThemeEnableMessage {
  type: typeof MessageType.themeEnable;
  value: boolean;
}
