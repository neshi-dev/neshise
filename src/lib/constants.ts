/**
 * Core site metadata and navigational constants.
 * Abstracting these data structures ensures that the UI components remain declarative
 * and avoids duplicating hardcoded strings across multiple layouts.
 */

export const SITE_META = {
  title: 'NESHISE | Accessible AI for all',
  description: 'NESHISE builds accessible AI systems, education, and tools for people and organizations.',
  author: 'NESHISE',
};

export const NAV_ITEMS = [
  { label: 'About', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: 'blog' },
  { label: 'YouTube', href: 'youtube' },
  { label: 'Resource Hub', href: 'resources' }
];

export const SERVICE_PILLARS = [
  {
    label: 'AI SEO',
    title: 'Search visibility for the AI era',
    text: 'Content maps, topical authority, technical SEO, and AI-assisted workflows for founders who want organic growth without guesswork.'
  },
  {
    label: 'YouTube',
    title: 'Educational video engines',
    text: 'Channel strategy, faceless video systems, scripts, thumbnails, and repeatable publishing workflows for audience growth.'
  },
  {
    label: 'Resources',
    title: 'Tools, guides, and playbooks',
    text: 'A practical hub for AI tools, prompts, workflows, templates, and tutorials that help people build faster.'
  },
  {
    label: 'Studio',
    title: 'Done-with-you AI systems',
    text: 'Accessible automations, research assistants, content systems, and operating playbooks for small teams and creators.'
  }
];

export const HUB_RESOURCES = [
  {
    title: 'Starter Guides',
    text: 'Step-by-step AI and SEO walkthroughs for beginners and operators.'
  },
  {
    title: 'Tool Library',
    text: 'Curated AI tools for content, research, automation, and online business.'
  },
  {
    title: 'Prompt Systems',
    text: 'Reusable prompt frameworks for planning, writing, repurposing, and analysis.'
  }
];
