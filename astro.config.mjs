import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpine from '@astrojs/alpinejs'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [{ protocol: 'https' }]
  },
  integrations: [
    tailwind(),
    alpine({ entrypoint: '/src/entrypoint' })],
  output: 'server',
  adapter: vercel()

})
