import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'http'
import { allowedNodeEnvironmentFlags } from 'process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    allowedHosts: [
      '505f-200-137-5-186.ngrok-free.app'
    ]
  }
})