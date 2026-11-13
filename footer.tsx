export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/70 bg-white/60 py-6 text-sm text-zinc-500 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/60 dark:text-zinc-400">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-6 text-center sm:flex-row sm:text-left">
        <address className="not-italic">
          &copy; Information Technology Program, Faculty of Computer Science and Information Technology
        </address>
        <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
          Built with Next.js &amp; Shadcn UI
        </span>
      </div>
    </footer>
  );
}