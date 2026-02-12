import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {crx} from '@crxjs/vite-plugin'
import manifest from './manifest.config' // 无需 .ts 后缀

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [
        react(),
        crx({manifest}),
    ],
})