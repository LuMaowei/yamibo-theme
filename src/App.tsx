import { useEffect, useState } from 'react';
import { storage } from '@/utils/chromeStorage.ts';
import { sendThemeEnableMessage } from '@/utils/chromeTabs.ts';
import './App.css';

function App() {
  const [themeEnable, setThemeEnable] = useState(true);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    sendThemeEnableMessage(themeEnable);
  }, [themeEnable]);

  async function init() {
    const value = await storage.getThemeEnable();
    setThemeEnable(value);
  }

  async function handleToggleThemeEnable() {
    await storage.setThemeEnable(!themeEnable);
    init();
  }

  return (
    <div style={{ padding: 16, width: 200 }}>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input type="checkbox" checked={themeEnable} onChange={handleToggleThemeEnable} />
        启用主题
      </label>
    </div>
  );
}

export default App;
