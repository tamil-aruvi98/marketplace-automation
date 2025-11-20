'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/products', label: 'Products', icon: '📦' },
    { href: '/orders', label: 'Orders', icon: '🛒' },
    { href: '/customers', label: 'Customers', icon: '👥' },
    { href: '/analytics', label: 'Analytics', icon: '📈' },
    { href: '/reports', label: 'Reports', icon: '📄' },
    { href: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
          Navigation
        </h2>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-900 dark:bg-zinc-800 text-white'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

      </div>
    </aside>
  );
}
