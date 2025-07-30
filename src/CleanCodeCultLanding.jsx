import { Sparkles, Eye, Code, ShieldCheck } from "lucide-react";

export default function CleanCodeCultLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6">
      <header className="text-center space-y-2 py-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-yellow-300">
          Свидетели Чистого Кода
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Религия Чистоты, Архитектуры и Священных Принципов. В эпоху хаоса — мы кодим с верой.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 mt-4 rounded">
          Принять догматы
        </button>
      </header>

      <section className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4">
  {[{
    icon: <Sparkles className="h-8 w-8 text-yellow-300" />,
    title: "Священные Тексты",
    desc: "«Евангелие от SOLID», «Книга DRY», «Притчи о KISS» — откровения Святого Роберта из Мартина."
  }, {
    icon: <Code className="h-8 w-8 text-yellow-300" />,
    title: "Чистота и Догматы",
    desc: "Не повторяйся. Тестируй всё. Комментируй с заботой. Пиши, как будто ты Бог."
  }, {
    icon: <Eye className="h-8 w-8 text-yellow-300" />,
    title: "CodePanopticon",
    desc: "ИИ следит за каждым коммитом. Отклонение от догм карается автоматически."
  }, {
    icon: <ShieldCheck className="h-8 w-8 text-yellow-300" />,
    title: "Обряды и Инициации",
    desc: "Pull Request — причастие. Code Review — исповедь. Merge — Вознесение."
  }].map((card, i) => (
    <div key={i} className="bg-gray-800 border border-yellow-400 p-6 rounded-xl space-y-4 shadow hover:scale-105 transition">
      {card.icon}
      <h2 className="text-xl font-semibold">{card.title}</h2>
      <p className="text-sm text-gray-300">{card.desc}</p>
    </div>
  ))}
</section>

      <footer className="text-center text-gray-500 text-sm pt-10 border-t border-gray-700">
        <p>© 2025 Свидетели Чистого Кода. Да пребудет с вами Чистота.</p>
      </footer>
    </div>
  );
}