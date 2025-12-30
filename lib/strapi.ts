const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

if (!STRAPI_URL) throw new Error("Missing env: NEXT_PUBLIC_STRAPI_URL");

export async function strapiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi request failed (${res.status}) ${text}`);
  }

  return res.json() as Promise<T>;
}
