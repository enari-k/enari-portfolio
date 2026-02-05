import Link from "next/link";
import Image from "next/image";
import { title } from "process";

// 自信のある作品のタイトルリスト
const CONFIDENT_PROJECTS = [
  "traPortal",
  "traQ",
  "Material-based Physics Engine",
  "Nand to Tetris",
  "No framework web",
  "悪夢祓いのアリス",
  "君を蝕むこの力で"
];

const allProjects = [
  // プロジェクトデータに追加
{
  title: "traQ",
  role: "Client Engineer",
  desc: "サークルtraPの部内専用チャットサービスです。部員同士の連絡やプライベートの共有に使われています。",
  link: "https://github.com/traPtitech/traQ_S-UI",
  zenn: "https://trap.jp/post/1051/",
  category: "Web",
  tags: ["Typescript","Vue"]
},
{
  title: "traPortal",
  role: "Backend Engineer",
  desc: "サークルtraPの800人の部員の実データを扱う部員の情報管理サービスです。主に入部の手続きや合宿などのイベントで必要な情報を提供するために用いられています。",
  link: null,
  zenn: "https://trap.jp/post/1181/",
  category: "Web",
  tags: ["Go","Github Actions","Allowance","portal"]
},
{
  title: "Material-based Physics Engine",
  role: "Lead Developer (Materials Science x CS)",
  desc: "材料力学の知見を導入した物理エンジン。剛体物理に加え、せん断応力やひずみテンソルを考慮した変形体シミュレーションを実装。ヤング率等の物性値をパラメータとして与えることで、現実の物質挙動を再現。",
  link: null, //リポジトリが出来たら入れる
  zenn: "https://zenn.dev/enari_k/articles/f21bc592f87a7a", 
  category: "R&D",
  tags: ["C#", "Physics", "Math", "Optimization"]
},
{
  title:"Nand to Tetris",
  role:"engineer",
  desc:"Nand回路一つを出発点にコンピューター上にコンピューターを製作しTetrisを実装する",
  link:"https://github.com/enari-k/Nand-to-Tetris", 
  zenn:"https://zenn.dev/enari_k/articles/e63b21cd3057df",
  category:"computer science",
},
{
  title:"No framework web",
  role:"engineer",
  desc:"フレームワークを使わずGoのみでWebサイトを実装する",
  link:null,
  zenn:null,
  category:"computer science",
},
{
  title:"GCI",
  role:"Data Scientist",
  desc:"機械学習について理解し、データから企業に提案するところまで",
  link:null,
  zenn:null,
  category:"computer science",
},
  {
    title: "悪夢祓いのアリス",
    role: "グラフィック / シナリオ",
    desc: "traP作品。Steamでリリース予定のリアルタイムローグライクカードゲーム。",
    link: "https://store.steampowered.com/app/3493230/_/",
    zenn: null,
    category: "Game",
  },
  {
    title: "君を蝕むこの力で",
    role: "個人製作",
    desc: "Unityroom公開中。リソース管理が鍵となるRPG。",
    link: "https://unityroom.com/games/kimimushi",
    zenn: "https://zenn.dev/enari_k/articles/13c43fc9d2b215",
    category: "Game",
  },
  {
    title: "超安心安全な最悪の鬱ゲー",
    role: "個人製作",
    desc: "Unityroom公開中。精神的にくる演出にこだわった作品。",
    link: "https://unityroom.com/games/utuge",
    zenn: "https://zenn.dev/enari_k/articles/04103be2b3b0fb",
    category: "Game",
  },
  {
    title: "Make 10sion",
    role: "GD / リーダー / Gr",
    desc: "traP作品。パズルとMake 10とローグライクカードゲームを掛け合わせたゲーム。",
    link: null,
    zenn: "https://trap.jp/post/2647/",
    category: "Game",
  },
  {
    title: "魔法少女ノ常夏島",
    role: "Pr / シナリオ",
    desc: "外部の人間と集まって作っている２次創作作品",
    link: "https://x.com/mano_shima13",
    zenn: null,
    category: "Game",
  },
  {
    title: "Internship SNS",
    role: "Full Stack",
    desc: "インターン提出作品。nodeとreactとSupabase を使用したSNS。",
    link: "https://pocketsign-internship.vercel.app/",
    zenn: null,
    category: "Web",
  },
  // --- 以下、アーカイブ作品 ---
  {
    title: "不調和",
    role: "企画 / リーダー / Pr / Gr",
    desc: "traP作品。チーム開発の難しさを学んだ初期作品。",
    link: null,
    zenn: null, // 反省記事
    category: "Game",
  },
  {
    title: "おかしコネクト",
    role: "企画 / リーダー / GD / Gr",
    desc: "traP作品。ハッカソンの連携ミスで完成まで行かなかった作品",
    link: null,
    zenn: null,
    category: "Game",
  },
  {
    title: "Elemate",
    role: "個人製作",
    desc: "traP15Jam作品。15時間での開発。実装力不足を痛感。",
    link: null,
    zenn: null,
    category: "Game",
  },
  {
    title: "Operation:Donbiki",
    role: "個人製作",
    desc: "Unityroom公開中。初めてのUnityroom公開作品",
    link: "https://unityroom.com/games/operation_donbiki",
    zenn: null,
    category: "Game",
  },
  {
    title: "君をむしばむこの力で 公式HP",
    role: "Full Stack",
    desc: "ゲーム公式サイト。",
    link: "https://kimimushi-cbhq.vercel.app/",
    zenn: null,
    category: "Web",
  },
  {
    title: "Paper Hacks",
    role: "企画 / リーダー",
    desc: "Programming Boot Camp 選考落ち作品。企画の詰めの甘さが反省点。",
    link: null,
    zenn: null,
    category: "Web",
  },
];



export default function Home() {
  const featuredProjects = allProjects.filter((p) => CONFIDENT_PROJECTS.includes(p.title));
  const archivedProjects = allProjects.filter((p) => !CONFIDENT_PROJECTS.includes(p.title));

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* --- ヘッダー・自己紹介エリア --- */}
        <header className="mb-12 text-center md:text-left">
          <div className="shrink-0 mb-4">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/icon.png"
                alt="enari_K Icon"
                fill
                priority
                className="rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            enari_K
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            東京科学大学 (旧東工大) 物質理工学院 材料系 B2 / traP
          </p>
          <p className="text-sm text-gray-500 font-mono mb-2 flex items-center justify-center md:justify-start gap-2">
            E-mail : contact@enari-k.com
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
            {["Game Dev", "Material Science", "Web Dev", "AtCoder", "Kaggle", "Live2D", "Scenario"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          
          {/* ソーシャルリンクボタン */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <SocialLink href="https://atcoder.jp/users/enari_K" label="AtCoder" color="bg-yellow-900 text-white" />
            <SocialLink href="https://unityroom.com/users/enari-k" label="unityroom" color="bg-indigo-600 text-white" />
            <SocialLink href="https://zenn.dev/enari_k" label="Zenn" color="bg-blue-500 text-white" />
            <SocialLink href="https://www.kaggle.com/enarik" label="Kaggle" color="bg-sky-500 text-white" />
            <SocialLink href="https://www.slideshare.net/rintakano624" label="SlideShare" color="bg-yellow-400 text-white"/>
            <SocialLink href="https://github.com/enari-k" label="Github" color="bg-gray-800 text-white"/>
          </div>
        </header>

        {/* --- 大会・コンテスト --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-6">
            🏆 Awards
          </h2>
          <ul className="space-y-3">
            <AwardItem title="ゲームクリエイター甲子園2025" award="セミファイナル(Best30)" />
            <AwardItem title="2024 1-Monthon (部内ハッカソン)" award="優秀賞" />
            <AwardItem title="ゲームクリエイター甲子園2024" award="月間賞" />
            <AwardItem title="2015 (公財)日本発明振興協会 子ども発明教室 発明奨励賞" award="佳作" />
          </ul>
        </section>

        {/* --- 自信のある作品セクション --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2 mb-6">
            ✨ Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} data={project} isArchive={false} />
            ))}
          </div>
        </section>

        {/* --- アーカイブ・過去の作品セクション --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-6 text-gray-500">
            📦 Archive & Reflections
          </h2>
          <div className="mb-6 text-sm text-gray-500 italic">
            過去の制作物と、そこから得た反省・学びをまとめています。
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {archivedProjects.map((project, index) => (
              <ProjectCard key={index} data={project} isArchive={true} />
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-400 text-sm py-8 border-t border-gray-200">
          &copy; {new Date().getFullYear()} enari_K. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}

// ----------------------------------------------------------------
// コンポーネント定義
// ----------------------------------------------------------------

function AwardItem({ title, award }: { title: string; award: string }) {
  return (
    <li className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <span className="font-semibold">{title}</span>
      <span className="text-blue-600 font-bold">{award}</span>
    </li>
  );
}

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

function ProjectCard({ data, isArchive }: { data: any; isArchive: boolean }) {
  return (
      
    <div className={`
      p-5 rounded-xl border flex flex-col h-full transition-all duration-200
      ${isArchive ? "bg-gray-50 border-gray-100 opacity-80" : "bg-white border-gray-100 shadow-sm hover:shadow-md"}
    `}>
    {/* カテゴリバッジ */}
      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-600 w-fit mb-2">
        {data.category}
      </span>
      <h3 className={`font-bold text-lg mb-1 ${isArchive ? "text-gray-600" : "text-gray-900"}`}>{data.title}</h3>
      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{data.role}</p>
      <p className="text-sm text-gray-700 flex-grow mb-4">{data.desc}</p>
      
      <div className="flex flex-wrap gap-4 mt-auto">
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline">
            View Project →
          </a>
        )}
        {data.zenn && (
          <a href={data.zenn} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal-600 hover:underline flex items-center gap-1">
            {isArchive ? "Reflection ↗" : "Article ↗"}
          </a>
        )}
      </div>
    </div>
  );
}