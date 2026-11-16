import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Actions 會依 Repository 名稱設定 BASE_PATH。
  // 本機開發與自訂網域預設使用根路徑。
  base: process.env.BASE_PATH || '/',
})
