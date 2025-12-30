import { notFound } from "next/navigation";
import { strapiFetch } from "@/lib/strapi";
import { PostItem, PostsResponse } from "@/types/strapi";

export const revalidate = 60; // ISR

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const res = await strapiFetch<PostsResponse>(
    `/api/posts?filters[slug][$eq]=${encodeURIComponent(slug)}`
  );

  const post = res.data?.[0];
  if (!post) return notFound();

  return (
    <main className="p-6 space-y-3">
      <p className="text-sm opacity-60">ISR (revalidate: 60s)</p>
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      {post.excerpt && <p className="opacity-80">{post.excerpt}</p>}

      <pre className="text-xs p-3 rounded bg-black/5 overflow-auto">
        {JSON.stringify(post.content, null, 2)}
      </pre>
    </main>
  );
}
