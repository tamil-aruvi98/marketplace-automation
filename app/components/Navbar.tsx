'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
              Marketplace
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/dashboard"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/products"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/orders"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/settings"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Settings
            </Link>
          </div>

          <div className="flex items-center">
            <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
