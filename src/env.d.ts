/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly STRAPI_URL: string;
}

interface Window {
    Alpine: import('alpinejs').Alpine;
  }
