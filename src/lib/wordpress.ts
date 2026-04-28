export interface WordPressDisplayPost {
  id?: string;
  slug?: string;
  href: string;
  title: string;
  description: string;
  category: string;
  publishDate: Date;
}

export interface WordPressFullPost extends WordPressDisplayPost {
  content: string;
}

interface WordPressPostResponse {
  date: string;
  link: string;
  slug?: string;
  title?: {
    rendered?: string;
  };
  excerpt?: {
    rendered?: string;
  };
  content?: {
    rendered?: string;
  };
}

const decodeHtml = (value: string) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const plainText = (html = '') =>
  decodeHtml(html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());

const getWordPressEndpoint = (path = 'posts') => {
  const apiUrl = import.meta.env.WORDPRESS_API_URL;

  if (!apiUrl) {
    return undefined;
  }

  return new URL(`${apiUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`);
};

export const getWordPressPosts = async (limit = 3): Promise<WordPressDisplayPost[]> => {
  const endpoint = getWordPressEndpoint('posts');

  if (!endpoint) {
    return [];
  }

  endpoint.searchParams.set('per_page', String(limit));
  endpoint.searchParams.set('_fields', 'slug,date,link,title,excerpt');

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as WordPressPostResponse[];

    return posts.map((post) => ({
      slug: post.slug,
      href: post.slug ? '' : post.link,
      title: plainText(post.title?.rendered ?? 'NESHISE insight'),
      description: plainText(post.excerpt?.rendered ?? ''),
      category: 'WordPress API',
      publishDate: new Date(post.date)
    }));
  } catch {
    return [];
  }
};

export const getWordPressStaticPosts = async (limit = 25): Promise<WordPressFullPost[]> => {
  const endpoint = getWordPressEndpoint('posts');

  if (!endpoint) {
    return [];
  }

  endpoint.searchParams.set('per_page', String(limit));
  endpoint.searchParams.set('_fields', 'slug,date,link,title,excerpt,content');

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      return [];
    }

    const posts = (await response.json()) as WordPressPostResponse[];

    return posts
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        slug: post.slug,
        href: '',
        title: plainText(post.title?.rendered ?? 'NESHISE insight'),
        description: plainText(post.excerpt?.rendered ?? ''),
        category: 'WordPress API',
        publishDate: new Date(post.date),
        content: post.content?.rendered ?? ''
      }));
  } catch {
    return [];
  }
};
