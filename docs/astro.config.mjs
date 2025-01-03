// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      favicon: '/favicon.png',
      title: 'Slimepedia API',
      logo: {
        src: './src/assets/Glitch_Slime.webp',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/caioabrahao/slimepedia-API',
        discord: 'https://discord.gg/vW9dTYTexa',
      },
      sidebar: [
        {
          label: 'Information',
          items: [
            { label: 'Overview', slug: 'information/overview' },
            { label: 'Technical', slug: 'information/technical' },
            { label: 'Contributing', slug: 'information/contributing' },
          ],
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});