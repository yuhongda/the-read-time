import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default', 'html'],
    environment: 'happy-dom',
  }
})
