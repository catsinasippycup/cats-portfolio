import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = '/cats-portfolio/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? repoName : '/'
})
