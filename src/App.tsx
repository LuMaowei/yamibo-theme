import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [enabled, setEnabled] = useState(true)

    // 初始化读取
    useEffect(() => {
        chrome.storage.sync.get(['themeEnabled'], (result) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setEnabled(result.themeEnabled ?? true);
        })
    }, [])

    const handleToggle = (value: boolean) => {
        setEnabled(value)

        // 存储状态
        chrome.storage.sync.set({themeEnabled: value})
        chrome.storage.local.set({themeEnabled: value})

        // 通知当前标签页
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            if (tabs[0]?.id) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    type: 'TOGGLE_THEME',
                    enabled: value,
                })
            }
        })
    }

    return (
        <div style={{padding: 16, width: 200}}>
            <label style={{display: 'flex', gap: 8, alignItems: 'center'}}>
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => handleToggle(e.target.checked)}/>
                启用主题
            </label>
        </div>
    )
}

export default App
