import Link from "next/link";

// データを管理しやすくするために配列にしておきます
const games = [
  {
    title: "悪夢祓いのアリス",
    role: "グラフィック / シナリオ",
    desc: "traP作品",
    link: "https://store.steampowered.com/app/3493230/_/",
  },
  {
    title: "不調和",
    role: "企画 / リーダー / Pr / Gr",
    desc: "traP作品",
    link: null,
  },
  {
    title: "おかしコネクト",
    role: "企画 / リーダー / GD / Gr",
    desc: "traP作品",
    link: null,
  },
  {
    title: "Make 10sion",
    role: "GD / リーダー / Gr",
    desc: "traP作品",
    link: "https://trap.jp/post/2647/",
  },
  {
    title: "Elemate",
    role: "個人製作",
    desc: "詳細なし",
    link: null,
  },
  {
    title: "Operation:Donbiki",
    role: "個人製作",
    desc: "Unityroom公開中",
    link: "https://unityroom.com/games/operation_donbiki",
  },
  {
    title: "君をむしばむこの力で",
    role: "個人製作",
    desc: "Unityroom公開中",
    link: "https://unityroom.com/games/kimimushi",
  },
  {
    title: "魔法少女ノ常夏島",
    role: "Pr / シナリオ",
    desc: "同人作品",
    link: null,
  },
];

const webs = [
  {
    title: "PocketSign Internship SNS",
    role: "Full Stack",
    desc: "インターン提出作品",
    link: "https://pocketsign-internship.vercel.app/",
  },
  {
    title: "君をむしばむこの力で 公式HP",
    role: "Full Stack",
    desc: "ゲーム公式サイト",
    link: "https://kimimushi-cbhq.vercel.app/",
  },
  {
    title: "Paper Hacks",
    role: "企画 / リーダー",
    desc: "Programming Boot Camp 選考落ち",
    link: null,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* --- ヘッダー・自己紹介エリア --- */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            enari_K
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            東京科学大学 (旧東工大) 物質理工学院 材料系 B2 / traP
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
            {/* スキルタグ */}
            {["Game Dev", "Material Science", "Web Dev", "AtCoder", "Kaggle", "Live2D"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          
          {/* ソーシャルリンクボタン */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <SocialLink href="https://atcoder.jp/users/enari_K" label="AtCoder" color="bg-gray-800 text-white" />
            <SocialLink href="https://unityroom.com/users/p6u9bwyk408j5sm3lqvh" label="unityroom" color="bg-indigo-600 text-white" />
            <SocialLink href="https://zenn.dev/enari_k" label="Zenn" color="bg-blue-500 text-white" />
            <SocialLink href="https://www.kaggle.com/enarik" label="Kaggle" color="bg-sky-500 text-white" />
          </div>
        </header>

        {/* --- 大会・コンテスト --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-6">
            🏆 Awards
          </h2>
          <ul className="space-y-3">
            <li className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-semibold">2024 1-Monthon (部内ハッカソン)</span>
              <span className="text-blue-600 font-bold">優秀賞</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-semibold">ゲームクリエイター甲子園2024</span>
              <span className="text-blue-600 font-bold">月間賞</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-semibold">2015 (公財)日本発明振興協会 子ども発明教室 発明奨励賞</span>
              <span className="text-blue-600 font-bold">佳作</span>
            </li>
          </ul>
        </section>

        {/* --- ゲーム制作歴 --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-6">
            🎮 Game Development
          </h2>
          <div className="mb-6 text-sm text-gray-500">
            <p>・中学生時代：Unityでマリオ風ゲーム、3D FPSゲームを制作</p>
            <p>・大学入学(traP入部)以降：</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game, index) => (
              <ProjectCard key={index} data={game} />
            ))}
          </div>
        </section>

        {/* --- Web制作歴 --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-6">
            💻 Web Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {webs.map((web, index) => (
              <ProjectCard key={index} data={web} />
            ))}
          </div>
        </section>

        {/* フッター */}
        <footer className="text-center text-gray-400 text-sm py-8 border-t border-gray-200">
          &copy; {new Date().getFullYear()} enari_K. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}

// 小さいコンポーネントを下に定義しておくとコードがスッキリします

function SocialLink({ href, label, color }: { href: string; label: string; color: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} px-4 py-2 rounded-md font-bold text-sm hover:opacity-80 transition-opacity duration-200`}
    >
      {label}
    </Link>
  );
}

function ProjectCard({ data }: { data: { title: string; role: string; desc: string; link: string | null } }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      <h3 className="font-bold text-lg mb-1">{data.title}</h3>
      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{data.role}</p>
      <p className="text-sm text-gray-700 flex-grow mb-4">{data.desc}</p>
      {data.link && (
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-600 hover:underline flex items-center mt-auto"
        >
          View Project →
        </a>
      )}
    </div>
  );
}