import { getStaticMarkdown } from '@/lib/markdown';

export default async function TOCPage() {
    const { contentHtml } = await getStaticMarkdown('rivendell-table-of-contents.md');

  return (
    <main className="prose mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Rivendell Initiative</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
