import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="flex min-h-screen">
          <aside className="w-64 border-r bg-white p-4 hidden md:block">
            <div className="mb-6">
              <h1 className="text-lg font-semibold">DEMO</h1>
            </div>

            <nav className="space-y-1">
              <SidebarLink href="/dashboard" label="Dashboard (SSR)" />
              <SidebarLink href="/posts" label="Posts (SSG)" />
            </nav>

            <div className="mt-8 text-xs text-gray-500">
              <p>Strapi: localhost:1337</p>
              <p>Web: localhost:3001</p>
            </div>
          </aside>

          <div className="flex-1">
            <header className="border-b bg-white px-4 py-3 flex items-center justify-between">
              <div className="md:hidden">
                <Link className="text-sm underline mr-3" href="/dashboard">
                  Dashboard
                </Link>
                <Link className="text-sm underline" href="/posts">
                  Posts
                </Link>
              </div>
              <p className="text-sm text-gray-600 hidden md:block">
                Rendering Strategies Demo
              </p>
            </header>

            <main className="p-4 md:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
    >
      {label}
    </Link>
  );
}
