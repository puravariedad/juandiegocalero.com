import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'))

// Appends ?ver=<package.json version> to the built stylesheet and script
// URLs, like WordPress did (style.css?ver=...). Bump "version" to bust cache.
const assetVersion = () => ({
  name: 'asset-version',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler: (html) =>
      html.replace(
        /(<link[^>]+href|<script[^>]+src)="([^"?]+\.(?:css|js))"/g,
        `$1="$2?ver=${version}"`,
      ),
  },
})

export default defineConfig({
  plugins: [vue(), assetVersion()],
})
