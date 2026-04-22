import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kmc2344.github.io',
  base: '/ghsp-school-intro',
  output: 'static',
  server: {
    host: true,
    port: 4321,
  },
});
