import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentPath = path.join(process.cwd(), 'content');

export async function getStaticMarkdown(filename: string) {
  const fullPath = path.join(contentPath, filename);
  const rawContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(rawContent);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    metadata: data,
    contentHtml,
  };
}

export function getAllMarkdownSlugs() {
    return fs.readdirSync(contentPath).map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
  }

  export function getAllMarkdownSlugsWithTitles() {
    return fs
      .readdirSync(contentPath)
      .map((filename) => {
        const filePath = path.join(contentPath, filename);
        const raw = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(raw);
        return {
          slug: filename.replace(/\.md$/, ''),
          title: data.title || filename.replace(/-/g, ' '),
          weight: data.weight || 999, // default to 999 if missing
        };
      })
      .sort((a, b) => a.weight - b.weight); // ⬅️ sort by weight
  }
  
  
