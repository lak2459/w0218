import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] dark:bg-zinc-950 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]">
      {/* แสงฟุ้งตกแต่งด้านหลัง */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/10" />

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-6 p-6">
        <Card className="w-full overflow-hidden border-zinc-200/80 bg-white/85 shadow-2xl shadow-blue-950/5 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/85">
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600" />
          <CardHeader className="space-y-4 pb-4 pt-7 sm:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-blue-600/10 text-blue-700 hover:bg-blue-600/20 dark:bg-blue-500/20 dark:text-blue-300">
                <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400" />
                รายวิชา 9024131
              </Badge>
              <Badge variant="secondary">Next.js 16</Badge>
              <Badge variant="outline">Shadcn UI</Badge>
            </div>

            <div className="space-y-2">
              <CardTitle className="bg-gradient-to-r from-zinc-900 via-blue-800 to-indigo-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl dark:from-white dark:via-blue-200 dark:to-indigo-400">
                Course Profile Web
              </CardTitle>
              <CardDescription className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                เว็บไซต์พอร์ตโฟลิโอประจำรายวิชา จัดทำโดย{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  นายศุภโชค บุญแต่ง
                </span>{" "}
                สำหรับรวบรวมข้อมูลประวัติส่วนตัวและผลงานปฏิบัติการในชั้นเรียน
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pb-8 sm:px-8">
            {/* การ์ดทางลัดแบบ Bento 2 ช่อง */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/bio"
                className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-blue-500/40 dark:hover:bg-zinc-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/15 dark:text-blue-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                  ประวัติส่วนตัว (Bio) &rarr;
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  ข้อมูลนักศึกษา รหัสประจำตัว สาขาวิชา และทักษะการพัฒนาเว็บไซต์
                </p>
              </Link>

              <Link
                href="/assignment"
                className="group rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-indigo-500/40 dark:hover:bg-zinc-900"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/15 dark:text-indigo-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-zinc-900 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                  รายการงาน (Assignment) &rarr;
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  ติดตามรายละเอียดงานที่ได้รับมอบหมาย คะแนน และกำหนดส่งแต่ละสัปดาห์
                </p>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/bio">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-white shadow-md shadow-blue-600/20 transition-all hover:opacity-95 hover:shadow-lg">
                  เริ่มต้นดูโปรไฟล์
                </Button>
              </Link>
              <Link href="/assignment">
                <Button variant="outline" className="rounded-full px-6">
                  ดูงานทั้งหมด (2)
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}   