import { strapiFetch } from "@/lib/strapi";

type PostsResponse = { data: any[] };

export const dynamic = "force-dynamic"; // SSR

export default async function DashboardPage() {
  // Her request güncel data: no-store
  const res = await strapiFetch<PostsResponse>(`/api/posts`, { cache: "no-store" });

  const total = res.data.length;
  const published = res.data.filter((p) => p.publishedAt).length;
  const drafts = total - published;

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard (SSR)</h1>
      <p className="opacity-80">Rendered on every request (cache: no-store)</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="border rounded-lg p-4">
          <p className="text-sm opacity-70">Total</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm opacity-70">Published</p>
          <p className="text-2xl font-semibold">{published}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm opacity-70">Drafts</p>
          <p className="text-2xl font-semibold">{drafts}</p>
        </div>
      </div>

      <pre className="text-xs p-3 rounded bg-black/5 overflow-auto">
        {JSON.stringify(res, null, 2)}
      </pre>
    </main>
  );
}
