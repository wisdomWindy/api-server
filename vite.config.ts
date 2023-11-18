import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: true,
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false,
        beautify: false
      }
    },
    lib: {
      entry:'src/app.ts',
      formats:['cjs'],
      fileName:'app.js'
    },
    rollupOptions: {
      input: 'src/app.ts',
      output: {
        dir: 'dist',
        extend: true,
        format: 'cjs',
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
      }
    }
  }
});
