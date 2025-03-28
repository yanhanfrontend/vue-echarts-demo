import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {
    'process.env': {},
    global: {}
  },
  server: {
    proxy: {
      '/examples/data/asset/data/life-expectancy-table.json': {
        target: 'https://echarts.apache.org',
        changeOrigin: true
      },
      '/zh/js/vendors/emoji-flags@1.3.0/data.json': {
        target: 'https://echarts.apache.org',
        changeOrigin: true
      },
      '/examples': {
        target: 'https://echarts.apache.org',
        changeOrigin: true
      },
      '/zh/js/vendors': {
        target: 'https://echarts.apache.org',
        changeOrigin: true
      }
    }
  }
});