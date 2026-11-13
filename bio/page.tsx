import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BioPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] dark:bg-zinc-950 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/10" />

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center p-6">
        <Card className="w-full max-w-2xl overflow-hidden border-zinc-200/80 bg-white/85 pt-0 shadow-2xl shadow-indigo-950/5 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/85">
          {/* แบนเนอร์ปกแบบ Mesh Gradient */}
          <div className="relative h-32 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_50%)]" />
          </div>

          <CardHeader className="items-center text-center">
            <div className="-mt-16 mb-2 flex justify-center">
              <div className="rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 p-1 shadow-xl">
                <Image
                  src="/images/avatar.png"
                  alt="Suphachok Boontaeng"
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full border-4 border-white bg-zinc-100 object-cover dark:border-zinc-900"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <CardTitle className="text-2xl font-extrabold sm:text-3xl">
                นายศุภโชค บุญแต่ง
              </CardTitle>
            </div>
            <CardDescription className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400">
              MR. SUPHACHOK BOONTAENG
            </CardDescription>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <Badge className="bg-blue-600 text-white hover:bg-blue-700">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="outline">Shadcn UI</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pb-8 sm:px-8">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-colors hover:border-blue-500/40 dark:border-zinc-800 dark:bg-zinc-950/60">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">รหัสนักศึกษา</p>
                  <p className="mt-0.5 font-bold text-zinc-900 dark:text-zinc-100">
                    6714421018
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-colors hover:border-indigo-500/40 dark:border-zinc-800 dark:bg-zinc-950/60">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">สาขาวิชา</p>
                  <p className="mt-0.5 font-bold text-zinc-900 dark:text-zinc-100">
                    เทคโนโลยีสารสนเทศ (IT)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-colors hover:border-violet-500/40 dark:border-zinc-800 dark:bg-zinc-950/60">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-600/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500">คณะ / ศูนย์การศึกษา</p>
                  <p className="mt-0.5 font-bold text-zinc-900 dark:text-zinc-100">
                    วิทยาการคอมพิวเตอร์ฯ (จันทบุรี)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 transition-colors hover:border-emerald-500/40 dark:border-zinc-800 dark:bg-zinc-950/60">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-500">อีเมลติดต่อ</p>
                  <p className="mt-0.5 truncate font-bold text-zinc-900 dark:text-zinc-100">
                    2230evollove.2016@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}