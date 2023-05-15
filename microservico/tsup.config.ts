import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  minify: true,
  clean: true,
  sourcemap: true,
  target: 'node16',
  
})
