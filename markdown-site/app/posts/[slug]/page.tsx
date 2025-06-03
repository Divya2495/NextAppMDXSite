import { getStaticMarkdown } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const files = ['welcome.md', 'rivendell-table-of-contents.md'];
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  try {
    const { contentHtml } = await getStaticMarkdown(`${slug}.md`);
    return (
      <main className="prose mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 capitalize">{slug.replace(/-/g, ' ')}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    );
  } catch (err) {
    notFound(); // show 404 if file doesn't exist
  }
}
