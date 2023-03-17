import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: 'Tailwind Content Scripts Issue',
  version: '1.0.0',
  action: {
    default_popup: 'popup.html'
  },
  options_page: 'options.html',
  content_scripts: [
    {
      js: ['src/content/main.ts'],
      matches: ['https://www.theguardian.com/*'],
      run_at: 'document_end'
    }
  ],
  host_permissions: ['https://www.theguardian.com/*']
})
