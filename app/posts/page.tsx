import Link from "next/link";
import { strapiFetch } from "@/lib/strapi";
import { PostItem, PostsResponse } from "@/types/strapi";

export const dynamic = "force-static"; // SSG

export default async function PostsPage() {
  const res = await strapiFetch<PostsResponse>(`/api/posts?sort=publishedAt:desc`);

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Posts (SSG)</h1>

      <ul className="space-y-3">
        {res.data.map((item) => (
          <li key={item.id} className="border rounded-lg p-4">
            <Link className="font-medium underline" href={`/posts/${item.slug}`}>
              {item.title}
            </Link>

            {item.excerpt && <p className="text-sm opacity-80 mt-1">{item.excerpt}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}