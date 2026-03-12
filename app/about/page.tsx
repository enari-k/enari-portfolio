"use client";

import { useState } from "react";
import Image from "next/image";
import { title } from "process";
import { resume } from "react-dom/server";

// 証書画像のリスト
const CERT_IMAGES = [
  { title: "Adobe Illustrator コース 基礎編", src: "/certs/スクリーンショット_6-2-2026_5026_.jpeg" },
  { title: "東京科学大学データサイエンス・AI全学教育プログラム（リテラシーレベル）", src: "/certs/スクリーンショット_6-2-2026_5112_.jpeg" },
  { title: "東京科学大学データサイエンス・AI全学教育プログラム（応用基礎レベル）", src: "/certs/スクリーンショット_6-2-2026_5141_.jpeg" },
  //{ title: "AtCoder Heuristic Contest 060", src: "/certs/スクリーンショット_6-2-2026_52033_atcoder.jp.jpeg" },
  //{ title: "AtCoder Beginner Contest 446", src: "/certs/スクリーンショット_6-2-2026_5210_atcoder.jp.jpeg" },
  { title: "ゲームクリエイター甲子園 2025 「悪夢祓いのアリス」", src: "/certs/ゲームサイクル賞.png"},
  { title: "PRTIMES hackathon 2026 Spring", src: "/certs/PRTIMES個人賞.png"}
];
// リンク付きの受賞リスト
const AWARDS_LIST = [
  { 
    title: "ゲームクリエイター甲子園 2024 「悪夢祓いのアリス」", 
    result: "11月月間賞", 
    // 結果発表ページや、自分の作品掲載ページのURL
    link: "https://game.creators-guild.com/g4c/38552/" 
  },
  {
    title:"2024 1-Monthon (部内ハッカソン)",
    result:"優秀賞",
    link:"https://trap.jp/post/2377/"
  },
  { 
    title: "AtCoder Beginner Contest 446", 
    result: "Performance 911", 
    link: "https://atcoder.jp/users/enari_K/history/share/abc441" 
  },
  { 
    title: "AtCoder Heuristic Contest 060", 
    result: "Performance 1854", 
    link: "https://atcoder.jp/users/enari_K/history/share/ahc060" 
  },
  {
    title: "Progateハッカソン powered by AWS 2026 第一回",
    result:"優秀賞",
    link: null
  },
  { 
    title: "2015 (公財)日本発明振興協会 子ども発明教室", 
    result: "発明奨励賞 佳作", 
    link: null // 古すぎてリンクがない場合はnull
  },
];

export default function About() {
  // 拡大表示する画像を管理するState
  const [selectedCert, setSelectedCert] = useState<null | typeof CERT_IMAGES[0]>(null);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      {/* 経歴テキスト（省略） */}

      {/* --- 受賞歴セクション --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">
          🏆 Awards & Recognition
        </h2>
        <ul className="space-y-3">
          {AWARDS_LIST.map((award, idx) => (
            <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div>
                <span className="font-bold text-gray-800 block sm:inline mr-2">
                  {award.title}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1 sm:mt-0">
                <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded">
                  {award.result}
                </span>
                {award.link && (
                  <a 
                    href={award.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    title="証明/結果を見る"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* --- 証明書ギャラリー（画像） --- */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">
          📜 Certificates Gallery
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          これまでに修了したコースや認定の証明書一覧です。
          <span className="text-xs text-gray-400 ml-2">※クリックで拡大</span>
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERT_IMAGES.map((cert, idx) => (
            <div 
              key={idx} 
              // クリックイベントを追加
              onClick={() => setSelectedCert(cert)}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="relative h-48 w-full bg-gray-50">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                {/* 拡大アイコンをホバー時に表示（親切設計） */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white drop-shadow-md">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                </div>
              </div>
              <div className="p-3 bg-white border-t border-gray-100">
                <p className="text-sm font-bold text-center text-gray-700">{cert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 拡大表示モーダル --- */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCert(null)} // 背景クリックで閉じる
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // 画像クリックでは閉じないようにする
          >
            {/* 閉じるボタン */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 拡大画像 */}
            <div className="relative w-full h-[80vh] bg-transparent">
               <Image
                 src={selectedCert.src}
                 alt={selectedCert.title}
                 fill
                 className="object-contain"
               />
            </div>
            {/* キャプション */}
            <p className="mt-4 text-white font-bold text-lg text-center bg-black/50 px-4 py-1 rounded-full">
               {selectedCert.title}
            </p>
          </div>
        </div>
      )}
      
    </main>
  );
}