import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const projects = [
  {
    name: "Webアプリサンプル",
    languages: ["JavaScript", "Python"],
    keywords: ["Web", "Django", "Docker", "RESTful API", "PostgreSQL", "2FA", "42Tokyo", "Nginx", "Bootstrap"],
    repo: { url: "https://github.com/iesuy-ryanagit/ft_transcendence_koko", label: "ft_transcendence" },
    description: "42Tokyoの最終課題にてチーム開発を行なったWebアプリ",
    publicUrl: "https://ft-transcendence-koko.vercel.app/",
    type: "チーム",
  },
  {
    name: "Go言語によるOpenTelemetryの導入",
    languages: ["Go"],
    keywords: ["OpenTelemetry", "SQL", "分散トレーシング", "マイクロサービス", "サイボウズ"],
    repo: { url: "https://blog.cybozu.io/entry/2025/10/06/170000", label: "サイボウズ記事" },
    description: "Go言語製のアプリケーションにOpenTelemetryを導入し、分散トレーシングとメトリクス収集を実装したプロジェクト。",
    type: "インターン",
  },
  {
    name: "お小遣い管理アプリ",
    languages: ["TypeScript", "Go"],
    keywords: ["Kubernetes", "minikube", "React", "Go", "TypeScript"],
    repo: { url: "https://github.com/iesuy-ryanagit/main_system", label: "お小遣い管理アプリ" },
    description: "個人で開発中のお小遣い管理アプリ",
    type: "個人",
  },
  {
    name: "ポートフォリオサイト",
    languages: ["TypeScript"],
    keywords: ["React", "TypeScript", "Vite", "CSS", "Github Actions", "ポートフォリオサイト"],
    repo: { url: "https://github.com/iesuy-ryanagit/Potaufeu", label: "ポートフォリオサイト" },
    description: "このポートフォリオサイト",
    type: "個人",
  },
  {
    name: "シンプルチャットボット",
    languages: ["Javascript", "Go"],
    keywords: ["チャットボット", "AI", "API", "LLM", "Web", "Docker", "Hugging Face", "Elasticsearch", "Logstash", "Kibana"],
    repo: { url: "https://github.com/iesuy-ryanagit/simple_chatbot", label: "シンプルチャットボット" },
    description: "Hugging FaceのAPIを呼び出して使うシンプルなチャットボットwebアプリ",
    type: "個人",
    publicUrl: "https://simple-chatbot-six-alpha.vercel.app/",
  },
  {
    name: "Nginx再実装",
    languages: ["C++"],
    keywords: ["Nginx", "Webサーバー", "epoll", "42Tokyo"],
    repo: { url: "https://github.com/LaLaSero/webserv", label: "webserv" },
    description: "Nginxの基本機能をC言語で再実装したWebサーバー",
    type: "チーム",
  },
  {
    name: "進路情報共有サイト",
    languages: ["TypeScript"],
    keywords: ["Web", "Firebase", "Vite", "ハッカソン", "42Tokyo"],
    repo: { url: "https://github.com/urabexon/42Tokyo-GENEROSITY_Hackathon", label: "進路情報共有サイト" },
    description: "42Tokyoのハッカソンにて作成した学生向けの進路情報共有サイト",
    type: "チーム",
  },
  {
    name: "bash再実装",
    languages: ["C"],
    keywords: ["bash", "シェル", "pipe", "dup", "42Tokyo"],
    repo: { url: "https://github.com/iesuy-ryanagit/minishell", label: "minishell" },
    description: "42Tokyoにて作成したbashの再実装",
    type: "チーム",
  },
  {
    name: "自動水やりシステム",
    languages: ["Arduino(C/C++)"],
    keywords: ["ESP32", "ハード", "ハッカソン", "LLM", "42Tokyo"],
    repo: { url: "https://github.com/iesuy-ryanagit/reazon_hack_e", label: "レアゾン" },
    description: "42Tokyoのハッカソンにて作成した、ESP32によるLLM(OpenAI API)を活用した自動水やりシステムです",
    type: "チーム",
  },
  {
    name: "Interview Practice System",
    languages: ["TypeScript"],
    keywords: ["TypeScript", "React", "Firebase"],
    repo: { url: "https://github.com/iesuy-ryanagit/interview", label: "Interview Practice System" },
    description: "面接質問を管理・練習するためのシステムで、TypeScript、React、Firebaseを使用して開発しました。個人で面接練習に実際に使用しています。",
    type: "個人",
    publicUrl: "https://interview-ruddy-pi.vercel.app/",
  },
    {
    name: "アーヴァインシステムズでのインターン",
    languages: ["Python"],
    keywords: ["Python", "Flask", "Docker","アーヴァインシステムズ"],
        repo: { url: "https://irvinesystems.co.jp/", label: "アーヴァインシステムズHP" },
    description: "アーヴァインシステムズにてインターンとして参加し、Flaskを用いたWebアプリケーションの開発に従事しました。Dockerを活用して開発環境を構築し、効率的な開発プロセスを実現しました。",
    type: "インターン",
    publicUrl: "https://interview-ruddy-pi.vercel.app/",
  },
];

export default function Projects() {
  const [searchParams] = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(defaultQuery);
  const [typeFilter, setTypeFilter] = useState("All");
  const [langFilters, setLangFilters] = useState<string[]>([]);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  // derive available languages from projects
  const availableLangs = Array.from(new Set(projects.flatMap(p => p.languages))).sort();

  const toggleLang = (lang: string) => {
    setLangFilters(prev => (prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]));
  };

  const matchesFilters = (p: typeof projects[number]) => {
    // type filter
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    // language filters
    if (langFilters.length > 0 && !langFilters.every(l => p.languages.includes(l))) return false;
    return true;
  };

  const filtered = projects.filter(p => {
    if (!matchesFilters(p)) return false;
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
    <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', margin: '2rem', width: '100%', maxWidth: 1100 }}>
      <h1 style={{ color: '#2563eb', marginBottom: '1rem' }}>Projects</h1>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="検索（キーワード・言語・種別）..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ padding: 8, flex: '1 1 320px', borderRadius: 6, border: '1px solid #ddd' }}
        />

        <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #ddd' }}>
          <option value="All">All</option>
          <option value="個人">個人</option>
          <option value="チーム">チーム</option>
          <option value="インターン">インターン</option>
        </select>

        <button onClick={() => { setQuery(''); setTypeFilter('All'); setLangFilters([]); }} style={{ padding: '8px 12px', borderRadius: 6, background: '#f3f4f6', border: '1px solid #ddd' }}>Reset</button>
      </div>

      {/* Language toggles */}
      <div style={{ marginBottom: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {availableLangs.map(lang => (
          <button
            key={lang}
            onClick={() => toggleLang(lang)}
            style={{
              padding: '6px 10px',
              borderRadius: 999,
              border: langFilters.includes(lang) ? '1px solid #2563eb' : '1px solid #e5e7eb',
              background: langFilters.includes(lang) ? '#eff6ff' : '#fff',
              cursor: 'pointer'
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
        {filtered.map(p => (
          <article key={p.name} style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 6px 18px rgba(16,24,40,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <strong style={{ fontSize: '1.05rem' }}>{p.name}</strong>
                <span style={{ background: p.type === '個人' ? '#2563eb' : p.type === 'インターン' ? '#ef4444' : '#10b981', color: '#fff', borderRadius: 8, padding: '4px 8px', fontSize: '0.8rem' }}>{p.type}</span>
              </div>

              <div style={{ marginTop: 8, marginBottom: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.languages.map(lang => (
                  <span key={lang} style={{ padding: '4px 8px', borderRadius: 6, background: '#f8fafc', border: '1px solid #e6eefc', fontSize: '0.85rem' }}>{lang}</span>
                ))}
              </div>

              <div style={{ marginBottom: 8 }}>
                <strong style={{ color: '#2563eb' }}>キーワード:</strong> {p.keywords.join(', ')}
              </div>

              <div style={{ marginBottom: 8 }}>
                <strong style={{ color: '#2563eb' }}>説明:</strong>
                <p style={{ margin: '6px 0 0 0', color: '#555' }}>{p.description}</p>
              </div>
            </div>

            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a href={p.repo.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', padding: '8px 10px', borderRadius: 8, border: '1px solid #e6eefc', background: '#fff' }}>{p.repo.label}</a>
              {p.publicUrl && <a href={p.publicUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: '#10b981', padding: '8px 10px', borderRadius: 8, textDecoration: 'none' }}>公開サイト</a>}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && <div style={{ color: '#888', textAlign: 'center', marginTop: 32 }}>該当するプロジェクトはありません</div>}
    </section>
  );
}
