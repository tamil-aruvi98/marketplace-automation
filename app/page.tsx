export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
        Welcome to Marketplace Automation
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Get started by navigating through the sidebar or top navigation menu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Dashboard
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            View your marketplace analytics and insights
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Products
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your product catalog and inventory
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Orders
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Track and manage customer orders
          </p>
        </div>
      </div>
    </div>
  );
}
