import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://daily-dose-of-muse.example.com',
  integrations: [tailwind()],
  output: 'static'
});