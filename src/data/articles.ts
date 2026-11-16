
import { Buffer } from 'buffer';
import matter from 'gray-matter';

// 將 Buffer 設定為瀏覽器環境的全域變數
Object.assign(globalThis, { Buffer });

export type Article = {
  slug: string;
  path: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  content: string;
};

const markdownFiles = import.meta.glob('/content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function toSlug(path: string) {
  return path.split('/').pop()?.replace(/\.md$/, '') ?? path;
}

export const articles: Article[] = Object.entries(markdownFiles)
  .map(([path, raw]) => {
    const parsed = matter(raw);
    const data = parsed.data as Record<string, unknown>;

    return {
      slug: toSlug(path),
      path,
      title: String(data.title ?? toSlug(path)),
      description: String(data.description ?? ''),
      category: String(data.category ?? 'ai-basics'),
      date: String(data.date ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      content: parsed.content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
