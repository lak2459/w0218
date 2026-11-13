import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AssignmentPage() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] dark:bg-zinc-950 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/10" />

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 p-6">
        {/* ส่วนหัวพร้อมแถบความคืบหน้า */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/85">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Assignments
              </h1>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                รายการงานที่ได้รับมอบหมายในรายวิชา 9024131
              </p>
            </div>
            <Badge className="bg-emerald-600/10 px-3 py-1 text-emerald-700 hover:bg-emerald-600/20 dark:bg-emerald-500/20 dark:text-emerald-300">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              ดำเนินการครบ 2 / 2 รายการ
            </Badge>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="group flex flex-col justify-between overflow-hidden border-zinc-200/80 bg-white/85 pt-0 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/85">
            <div>
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600" />
              <CardHeader className="pt-5">
                <div className="mb-2 flex items-center justify-between">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                    Week 02
                  </Badge>
                  <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                    10 คะแนน
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Course Profile Website
                </CardTitle>
                <CardDescription>ครบกำหนด 20 พ.ย.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  สร้างหน้าเว็บโปรไฟล์รายวิชาประกอบด้วย Home, Bio, Assignment พร้อมสร้าง Custom Components อย่างน้อย 2 รายการและใช้งาน Shadcn UI
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="secondary" className="text-xs">3 Pages</Badge>
                  <Badge variant="secondary" className="text-xs">Navbar &amp; Footer</Badge>
                  <Badge variant="secondary" className="text-xs">Shadcn UI</Badge>
                </div>
              </CardContent>
            </div>
            <CardFooter className="pt-2">
              <Link href="/" className="w-full">
                <Button size="sm" className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95">
                  ดูผลงานหน้าหลัก &rarr;
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="group flex flex-col justify-between overflow-hidden border-zinc-200/80 bg-white/85 pt-0 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/50 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/85">
            <div>
              <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-violet-600" />
              <CardHeader className="pt-5">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary">Week 03</Badge>
                  <Badge variant="outline">ปฏิบัติการ</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  Next.js Routing &amp; Components
                </CardTitle>
                <CardDescription>ฝึกปฏิบัติในชั้นเรียน</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  การสร้างโปรเจกต์ Next.js การเชื่อมโยงหน้าเว็บด้วย Link และการแยกส่วนประกอบ Navbar และ Footer Component
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="secondary" className="text-xs">App Router</Badge>
                  <Badge variant="secondary" className="text-xs">Next Link</Badge>
                  <Badge variant="secondary" className="text-xs">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </div>
            <CardFooter className="pt-2">
              <Link href="/bio" className="w-full">
                <Button size="sm" variant="outline" className="w-full rounded-full">
                  ดูข้อมูลผู้จัดทำ &rarr;
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}