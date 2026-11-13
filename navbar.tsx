"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Bio", href: "/bio" },
    { name: "Assignment", href: "/assignment" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/75 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/75">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
            SB
          </div>
          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-base font-bold leading-none text-transparent dark:from-white dark:to-zinc-400">
              Suphachok
            </span>
            <span className="mt-1 text-[11px] font-medium text-blue-600 dark:text-blue-400">
              CSIT • 9024131
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1 rounded-full border border-zinc-200/80 bg-zinc-100/70 p-1 dark:border-zinc-800 dark:bg-zinc-900/80">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={
                    isActive
                      ? "rounded-full bg-white px-4 font-semibold text-blue-600 shadow-sm hover:bg-white dark:bg-zinc-800 dark:text-blue-400 dark:hover:bg-zinc-800"
                      : "rounded-full px-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}