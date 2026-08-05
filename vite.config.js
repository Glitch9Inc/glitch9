import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages has no server-side rewrite, so a direct hit on /goods
// would 404. Serving the same document as 404.html lets the client
// router take over. Keep this if any client-side route exists.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const dir = resolve(process.cwd(), 'dist')
    copyFileSync(resolve(dir, 'index.html'), resolve(dir, '404.html'))
  },
})

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  base: '/',
})
