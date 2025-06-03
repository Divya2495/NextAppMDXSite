import Link from 'next/link';
import { getAllMarkdownSlugsWithTitles } from '@/lib/markdown';

export default async function HomePage() {
  const posts = getAllMarkdownSlugsWithTitles();

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">📘 Technical Topics</h1>
      <ul className="list-disc pl-5 space-y-2">
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              href={`/posts/${slug}`}
              className="text-blue-600 hover:underline"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
