import { useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Home,
  Layers,
  Lightbulb,
  ListChecks,
  Map,
  Menu,
  Rocket,
  Target,
  X
} from "lucide-react";
import {
  codeExamples,
  exercises,
  materials,
  projects,
  quizzes,
  roadmap,
  tips
} from "./data.js";

const navItems = [
  { label: "Beranda", to: "/", icon: Home },
  { label: "Materi", to: "/materi", icon: BookOpen },
  { label: "Roadmap", to: "/roadmap", icon: Map },
  { label: "Kode", to: "/contoh-kode", icon: Code2 },
  { label: "Latihan", to: "/latihan", icon: ListChecks },
  { label: "Quiz", to: "/quiz", icon: Brain },
  { label: "Project", to: "/mini-project", icon: Rocket },
  { label: "Tips", to: "/tips-belajar", icon: Lightbulb },
  { label: "Tentang", to: "/tentang", icon: FileText }
];

const colorStyles = {
  blue: "border-blue-100 bg-blue-50 text-blue-700",
  green: "border-emerald-100 bg-emerald-50 text-emerald-700",
  yellow: "border-amber-100 bg-amber-50 text-amber-700",
  red: "border-red-100 bg-red-50 text-red-700"
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded bg-blue-600 text-white">
            <Code2 size={22} />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-extrabold text-slate-950 sm:text-lg">
              Python Learning Portal
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Belajar Python bertahap
            </span>
          </span>
        </Link>

        <button
          aria-label="Buka navigasi"
          className="grid h-10 w-10 place-items-center rounded border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <NavItem key={item.to} item={item} onClick={() => setOpen(false)} mobile />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function NavItem({ item, mobile = false, onClick }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex items-center gap-2 rounded px-3 py-2 text-sm font-semibold transition",
          mobile ? "justify-start" : "justify-center",
          isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
        ].join(" ")
      }
    >
      <Icon size={16} />
      {item.label}
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-slate-950">
            <span className="grid h-10 w-10 place-items-center rounded bg-blue-600 text-white">
              <Code2 size={22} />
            </span>
            <span className="text-lg font-extrabold">Python Learning Portal</span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Portal pembelajaran Python statis berbasis React untuk membangun fondasi
            programming dari konsep dasar sampai project kecil.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {navItems.slice(1, 9).map((item) => (
            <Link key={item.to} to={item.to} className="font-semibold text-slate-600 hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Shell() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/materi" element={<MaterialsPage />} />
          <Route path="/materi/:id" element={<MaterialDetailPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/contoh-kode" element={<CodeExamplesPage />} />
          <Route path="/latihan" element={<ExercisesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/mini-project" element={<MiniProjectPage />} />
          <Route path="/tips-belajar" element={<TipsPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function PageHeader({ eyebrow, title, description, icon: Icon = GraduationCap }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-blue-50 text-blue-700">
            <Icon size={24} />
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">{eyebrow}</p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">{title}</h1>
            <p className="mt-4 leading-7 text-slate-600">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const featuredMaterials = materials.slice(0, 6);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
              <GraduationCap size={16} />
              Portal belajar Python tanpa login
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Python Learning Portal
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Belajar Python dari nol dengan materi ringkas, contoh kode, latihan,
              quiz pilihan ganda, roadmap, dan mini project yang langsung bisa dipraktikkan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/materi"
                className="inline-flex items-center justify-center gap-2 rounded bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-700"
              >
                Mulai Belajar
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/roadmap"
                className="inline-flex items-center justify-center gap-2 rounded border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
              >
                Lihat Roadmap
                <Map size={18} />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-soft">
            <img
              src="/python-learning-hero.png"
              alt="Ilustrasi workspace belajar Python"
              className="aspect-video w-full bg-slate-50 object-contain"
            />
            <div className="border-t border-slate-200 bg-slate-950 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="max-h-36 overflow-hidden">
                <CodeBlock
                  code={
                    "topics = ['Dasar', 'Loop', 'Data', 'OOP']\n\nfor topic in topics:\n    print(f'Belajar {topic}')\n\nprint('Siap membuat project Python!')"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard value={String(materials.length)} label="Materi Python" tone="blue" />
          <StatCard value="5" label="Soal quiz" tone="green" />
          <StatCard value="3" label="Mini project" tone="yellow" />
          <StatCard value="100%" label="Frontend statis" tone="red" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <SectionTitle
          title="Materi Populer"
          description="Mulai dari fondasi dasar, lalu lanjutkan ke kontrol alur dan struktur data."
          action={<LinkButton to="/materi" label="Semua Materi" />}
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredMaterials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      </section>
    </>
  );
}

function StatCard({ value, label, tone }) {
  const toneClass = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    yellow: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700"
  }[tone];

  return (
    <div className="rounded border border-slate-200 bg-white p-5">
      <div className={`inline-flex rounded px-3 py-1 text-2xl font-extrabold ${toneClass}`}>{value}</div>
      <p className="mt-3 text-sm font-bold text-slate-600">{label}</p>
    </div>
  );
}

function SectionTitle({ title, description, action }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-950">{title}</h2>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600">{description}</p>
      </div>
      {action}
    </div>
  );
}

function LinkButton({ to, label }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
    >
      {label}
      <ArrowRight size={16} />
    </Link>
  );
}

function MaterialsPage() {
  const groups = useMemo(
    () =>
      materials.reduce((acc, material) => {
        acc[material.category] = [...(acc[material.category] || []), material];
        return acc;
      }, {}),
    []
  );

  return (
    <>
      <PageHeader
        eyebrow="Daftar Materi"
        title="Materi Python Pemula sampai Menengah"
        description="Pilih materi sesuai kebutuhan. Setiap artikel berisi penjelasan singkat, konsep inti, dan contoh kode yang mudah dicoba."
        icon={BookOpen}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {Object.entries(groups).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-xl font-extrabold text-slate-950">{category}</h2>
              <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function MaterialCard({ material }) {
  return (
    <Link
      to={`/materi/${material.id}`}
      className="group flex h-full flex-col rounded border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"
    >
      <div className="flex items-center justify-between gap-3">
        <span className={`rounded border px-3 py-1 text-xs font-bold ${colorStyles[material.color]}`}>
          {material.category}
        </span>
        <span className="text-xs font-bold text-slate-500">{material.duration}</span>
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-slate-950">{material.title}</h3>
      <p className="mt-2 flex-1 leading-7 text-slate-600">{material.summary}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-bold">
        <span className="text-slate-500">{material.level}</span>
        <span className="inline-flex items-center gap-2 text-blue-700 group-hover:gap-3">
          Buka
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

function MaterialDetailPage() {
  const { id } = useParams();
  const material = materials.find((item) => item.id === id);

  if (!material) return <NotFoundPage />;

  return (
    <>
      <PageHeader
        eyebrow={`${material.category} · ${material.level}`}
        title={material.title}
        description={material.summary}
        icon={BookOpen}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <article className="rounded border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="article">
            <h2>Konsep Utama</h2>
            {material.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>Contoh Kode</h2>
          </div>
          <div className="mt-5 rounded border border-slate-200 bg-slate-950 p-4">
            <CodeBlock code={material.code} />
          </div>
        </article>

        <aside className="h-max rounded border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-extrabold text-slate-950">Detail Materi</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <InfoRow label="Level" value={material.level} />
            <InfoRow label="Durasi" value={material.duration} />
            <InfoRow label="Kategori" value={material.category} />
          </dl>
          <Link
            to="/latihan"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            Kerjakan Latihan
            <Target size={17} />
          </Link>
        </aside>
      </section>
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
      <dt className="font-semibold text-slate-500">{label}</dt>
      <dd className="font-bold text-slate-900">{value}</dd>
    </div>
  );
}

function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title="Jalur Belajar Python yang Terarah"
        description="Ikuti urutan belajar dari setup dasar sampai mini project agar progres tetap jelas dan tidak melompat terlalu jauh."
        icon={Map}
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {roadmap.map((step, index) => (
            <div key={step} className="grid gap-4 rounded border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[64px_1fr]">
              <div className="grid h-12 w-12 place-items-center rounded bg-blue-600 text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <div>
                <h2 className="font-extrabold text-slate-950">Tahap {index + 1}</h2>
                <p className="mt-1 leading-7 text-slate-600">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function CodeExamplesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contoh Kode"
        title="Snippet Python Siap Dicoba"
        description="Gunakan contoh ini untuk memahami pola sintaks umum dan membiasakan diri membaca kode Python."
        icon={Code2}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        {codeExamples.map((example) => (
          <div key={example.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-extrabold text-slate-950">{example.title}</h2>
              <span className="rounded bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {example.topic}
              </span>
            </div>
            <div className="mt-4 rounded border border-slate-200 bg-slate-950 p-4">
              <CodeBlock code={example.code} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function ExercisesPage() {
  const [answers, setAnswers] = useState({});
  const answeredCount = Object.keys(answers).length;
  const correctCount = exercises.reduce(
    (total, exercise, index) => total + (answers[index] === exercise.answer ? 1 : 0),
    0
  );

  return (
    <>
      <PageHeader
        eyebrow="Latihan"
        title="Latihan Mandiri Python"
        description="Kerjakan soal-soal kecil ini setelah membaca materi. Pilih jawaban, lalu lihat apakah benar atau perlu diperbaiki."
        icon={ListChecks}
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-5 grid gap-4 rounded border border-emerald-100 bg-emerald-50 p-5 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-emerald-700">Benar</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-950">{correctCount}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-emerald-700">Dijawab</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-950">
              {answeredCount} / {exercises.length}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-emerald-700">Akurasi</p>
            <p className="mt-1 text-3xl font-extrabold text-slate-950">
              {answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0}%
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {exercises.map((exercise, index) => (
            <div key={exercise.task} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-emerald-50 font-extrabold text-emerald-700">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-extrabold text-slate-950">Latihan {index + 1}</h2>
                  <p className="mt-1 leading-7 text-slate-600">{exercise.task}</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {exercise.options.map((option) => {
                      const selected = answers[index] === option;
                      const answered = Boolean(answers[index]);
                      const correct = option === exercise.answer;

                      return (
                        <button
                          key={option}
                          className={[
                            "rounded border px-4 py-3 text-left text-sm font-bold transition",
                            selected && correct
                              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                              : selected
                                ? "border-red-200 bg-red-50 text-red-800"
                                : answered && correct
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                  : answered
                                    ? "border-slate-200 bg-slate-50 text-slate-400"
                                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50"
                          ].join(" ")}
                          disabled={answered}
                          onClick={() => setAnswers((value) => ({ ...value, [index]: option }))}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {answers[index] && (
                    <div
                      className={[
                        "mt-4 rounded border p-4",
                        answers[index] === exercise.answer
                          ? "border-emerald-100 bg-emerald-50"
                          : "border-red-100 bg-red-50"
                      ].join(" ")}
                    >
                      <p
                        className={[
                          "font-extrabold",
                          answers[index] === exercise.answer ? "text-emerald-800" : "text-red-800"
                        ].join(" ")}
                      >
                        {answers[index] === exercise.answer ? "Benar" : "Belum benar"}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{exercise.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function QuizPage() {
  const [selected, setSelected] = useState({});
  const score = quizzes.reduce((total, quiz, index) => total + (selected[index] === quiz.answer ? 1 : 0), 0);

  return (
    <>
      <PageHeader
        eyebrow="Quiz Python"
        title="Uji Pemahaman Dasar"
        description="Pilih jawaban untuk setiap soal. Skor akan diperbarui langsung tanpa backend atau database."
        icon={Brain}
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-5 rounded border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-bold text-blue-700">Skor saat ini</p>
          <p className="mt-1 text-3xl font-extrabold text-slate-950">
            {score} / {quizzes.length}
          </p>
        </div>
        <div className="space-y-5">
          {quizzes.map((quiz, index) => (
            <div key={quiz.question} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-extrabold text-slate-950">
                {index + 1}. {quiz.question}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quiz.options.map((option) => {
                  const isSelected = selected[index] === option;
                  const isCorrect = option === quiz.answer;
                  const showResult = Boolean(selected[index]);
                  return (
                    <button
                      key={option}
                      className={[
                        "flex items-center justify-between rounded border px-4 py-3 text-left text-sm font-bold transition",
                        isSelected && isCorrect
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : isSelected
                            ? "border-red-200 bg-red-50 text-red-800"
                            : showResult && isCorrect
                              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                              : showResult
                                ? "border-slate-200 bg-slate-50 text-slate-400"
                                : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50"
                      ].join(" ")}
                      disabled={showResult}
                      onClick={() => setSelected((value) => ({ ...value, [index]: option }))}
                    >
                      {option}
                      {showResult && isCorrect && <CheckCircle2 size={18} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function MiniProjectPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mini Project"
        title="Bangun Project Kecil dengan Python"
        description="Project kecil membantu menggabungkan beberapa konsep dalam satu program yang terasa nyata."
        icon={Rocket}
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        {projects.map((project) => (
          <div key={project.title} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
            <span className="rounded bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
              {project.difficulty}
            </span>
            <h2 className="mt-4 text-xl font-extrabold text-slate-950">{project.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function TipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tips Belajar"
        title="Cara Belajar Python Lebih Efektif"
        description="Gunakan kebiasaan kecil yang konsisten agar proses belajar tidak berhenti di membaca materi saja."
        icon={Lightbulb}
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {tips.map((tip, index) => (
            <div key={tip} className="flex gap-4 rounded border border-slate-200 bg-white p-5 shadow-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-amber-50 font-extrabold text-amber-700">
                {index + 1}
              </span>
              <p className="leading-7 text-slate-700">{tip}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang"
        title="Tentang Python Learning Portal"
        description="Website ini dibuat sebagai portal edukasi programming statis, ringan, dan mudah dihosting."
        icon={Layers}
      />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="article">
            <h2>Tujuan</h2>
            <p>
              Python Learning Portal membantu pemula mempelajari Python secara bertahap,
              mulai dari konsep dasar sampai project kecil yang bisa dikembangkan sendiri.
            </p>
            <h2>Teknologi</h2>
            <ul>
              <li>React JS dan Vite untuk frontend yang cepat.</li>
              <li>Tailwind CSS untuk desain modern, bersih, dan responsif.</li>
              <li>React Router DOM untuk navigasi halaman.</li>
              <li>Lucide React untuk ikon antarmuka.</li>
              <li>Data dummy JavaScript tanpa login, backend, atau database.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-slate-950">Halaman tidak ditemukan</h1>
      <p className="mt-4 leading-7 text-slate-600">Alamat yang dibuka tidak tersedia di portal ini.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
      >
        Kembali ke Beranda
        <Home size={17} />
      </Link>
    </section>
  );
}

function CodeBlock({ code }) {
  return (
    <pre className="overflow-x-auto text-sm leading-7 text-slate-100">
      <code>{code}</code>
    </pre>
  );
}

export default function App() {
  return <Shell />;
}
