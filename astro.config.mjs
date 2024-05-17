import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'

import react from '@astrojs/react'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://shxrk.dev/',
    trailingSlash: 'ignore',
    integrations: [react(), partytown(), sitemap()],

    redirects: {
        '/old/projects': { status: 302, destination: '/old_projects' },
        'old/tools/': { status: 302, destination: '/old_tools' },
    },
    
    output: 'server',
    adapter: vercel({ webAnalytics: {enabled : true} })
});
