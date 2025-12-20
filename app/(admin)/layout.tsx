export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar Placeholder */}
            <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
                <h2 className="text-xl font-bold mb-8">Nxtlab Admin</h2>
                <nav className="space-y-4">
                    <a href="/dashboard" className="block p-2 bg-brand-600 rounded">Dashboard</a>
                    <a href="#" className="block p-2 hover:bg-white/10 rounded text-slate-300">Projects</a>
                    <a href="#" className="block p-2 hover:bg-white/10 rounded text-slate-300">News</a>
                    <a href="#" className="block p-2 hover:bg-white/10 rounded text-slate-300">Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
