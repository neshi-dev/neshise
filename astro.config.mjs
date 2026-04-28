import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const [githubOwner = 'neshi-dev', githubRepositoryName = 'Neshise-Website'] =
  process.env.GITHUB_REPOSITORY?.split('/') ?? [];

export default defineConfig({
  site: isGitHubPages ? `https://${githubOwner.toLowerCase()}.github.io` : 'https://neshise.com',
  base: isGitHubPages ? `/${githubRepositoryName}` : '/',
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
