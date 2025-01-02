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
      social: {
        github: 'https://github.com/caioabrahao/slimepedia-API',
      },
      sidebar: [
        {
          label: 'Information',
          items: [
            { label: 'Overview', slug: 'information/overview' },
            { label: 'Introduction', slug: 'information/introduction' },
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