import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const projects = [
  {
    name: "Webアプリサンプル",
    languages: ["JavaScript", "Python"],
    keywords: ["Web", "Django","Docker","RESTful API","PostgreSQL","2FA","42Tokyo"],
    repo: { url: "https://github.com/iesuy-ryanagit/ft_transcendence_koko", label: "ft_transcendence" },
    description: "42Tokyoの最終課題にてチーム開発を行なったWebアプリ",
    type: "チーム",
  },
  {
    name: "Go言語によるOpenTelemetryの導入",
    languages: ["Go"],
    keywords: ["OpenTelemetry", "SQL","分散トレーシング","マイクロサービス","サイボウズ"],
    repo: { url: "https://github.com", label: "サイボウズ記事" },
    description: "Go言語製のWebアプリにOpenTelemetryを導入し、分散トレーシングとメトリクス収集を実装したプロジェクト。",
    type: "インターン",
  },
  {
    name: "お小遣い管理アプリ",
    languages: ["TypeScript", "Go"],
    keywords: ["Kubernetes","minikube","React","Go","TypeScript"],
    repo: { url: "https://github.com/iesuy-ryanagit/main_system", label: "お小遣い管理アプリ" },
    description: "個人で開発中のお小遣い管理アプリを、Kubernetesを用いてGCP上で運用する予定。",
    type: "個人"
    // 公開URLなし
  },
  {
    name: "ポートフォリオサイト",
    languages: ["TypeScript"],
    keywords: ["React","TypeScript","Vite","CSS","ポートフォリオサイト"],
    repo: { url: "https://github.com/iesuy-ryanagit/Potaufeu", label: "ポートフォリオサイト" },
    description: "このポートフォリオサイト。ReactとTypeScriptで作成。",
    type: "個人",
  },
    {
    name: "シンプルチャットボット",
    languages: ["Javascript", "Go"],
    keywords: ["チャットボット",,"AI","API","LLM","Web", "Hugging Face"],
    repo: { url: "https://github.com/iesuy-ryanagit/simple_chatbot", label: "シンプルチャットボット" },
    description: "Hugging FaceのAPIを呼び出して使うシンプルなチャットボットwebアプリ",
    type: "個人",
    publicUrl: "https://simple-chatbot-six-alpha.vercel.app/"
    },
    {
    name: "Nginx再実装",
    languages: ["C"],
    keywords: ["Nginx", "Webサーバー", "epoll","42Tokyo"],
    repo: { url: "https://github.com/LaLaSero/webserv", label: "ポートフォリオサイト" },
    description: "Nginxの基本機能をC言語で再実装したWebサーバー",
    type: "チーム"
    // 公開URLなし
    },
    {
    name: "進路情報共有サイト",
    languages: ["TypeScript"],
    keywords: ["Web","Firebase","Vite", "ハッカソン","42Tokyo"],
    repo: { url: "https://github.com/urabexon/42Tokyo-GENEROSITY_Hackathon", label: "進路情報共有サイト" },
    description: "42Tokyoのハッカソンにて作成した学生向けの進路情報共有サイト",
    type: "チーム"
    },
    {
    name: "bash再実装",
    languages: ["C"],
    keywords: ["bash","シェル","bash","pipe","dup","42Tokyo"],
    repo: { url: "https://github.com/iesuy-ryanagit/minishell", label: "minishell" },
    description: "42Tokyoにて作成したbashの再実装",
    type: "チーム"
    // 公開URLなし
    }
];

export default function Projects() {
const [searchParams] = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const filtered = projects.filter(p => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.languages.some(lang => lang.toLowerCase().includes(q)) ||
      p.keywords.some(kw => kw.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q)
    );
  });

  return (
    <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', margin: '2rem', width: 800 }}>
      <h1 style={{ color: '#2563eb', marginBottom: '1rem' }}>Projects</h1>
      <input
        type="text"
        placeholder="キーワード・言語・種別で検索..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ marginBottom: 20, padding: 8, width: "100%", borderRadius: 6, border: '1px solid #ddd' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map(p => (
          <li key={p.name} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
              <strong style={{ fontSize: '1.1rem' }}>{p.name}</strong>
              <span
  style={{
    background:
      p.type === '個人'
        ? '#2563eb' // 青
        : p.type === 'インターン'
        ? '#ef4444' // 赤
        : '#10b981', // 緑
    color: '#fff',
    borderRadius: 6,
    padding: '2px 10px',
    fontSize: '0.9rem',
  }}
>
  {p.type}
</span>

            </div>
            <div style={{ marginBottom: 4 }}>
              <span style={{ color: '#2563eb', fontWeight: 600 }}>使用言語:</span> {p.languages.join(", ")}
            </div>
            <div style={{ marginBottom: 4 }}>
              <span style={{ color: '#2563eb', fontWeight: 600 }}>キーワード:</span> {p.keywords.join(", ")}
            </div>
            <div style={{ marginBottom: 4 }}>
              <span style={{ color: '#2563eb', fontWeight: 600 }}>レポジトリ:</span> <a href={p.repo.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>{p.repo.label}</a>
            </div>
            {p.publicUrl && (
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: '#2563eb', fontWeight: 600 }}>公開URL:</span> <a href={p.publicUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>{p.publicUrl}</a>
              </div>
            )}
            <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>{p.description}</p>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <div style={{ color: '#888', textAlign: 'center', marginTop: 32 }}>該当するプロジェクトはありません</div>}
    </section>
  );
}
