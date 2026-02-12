import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Webアプリサンプル",
    languages: ["JavaScript", "Python"],
    keywords: ["Web", "Django", "Docker", "RESTful API", "PostgreSQL", "2FA", "42Tokyo", "Nginx", "Bootstrap"],
    repo: { url: "https://github.com/iesuy-ryanagit/ft_transcendence_koko", label: "ft_transcendence" },
    description: "42Tokyoの最終課題にてチーム開発を行なったWebアプリ",
    publicUrl: {url: "https://ft-transcendence-koko.vercel.app/", label: "公開サイト"},
    type: "チーム",
  },
  {
    name: "Go言語によるOpenTelemetryの導入",
    languages: ["Go"],
    keywords: ["OpenTelemetry", "SQL", "分散トレーシング", "マイクロサービス", "サイボウズ"],
    description: "Go言語製のアプリケーションにOpenTelemetryを導入し、分散トレーシングとメトリクス収集を実装したプロジェクト。",
    publicUrl: {url: "https://blog.cybozu.io/entry/2025/10/06/170000", label: "公開記事"},
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
    publicUrl: {url: "https://simple-chatbot-six-alpha.vercel.app/", label: "公開サイト"},
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
    publicUrl: {url: "https://interview-ruddy-pi.vercel.app/", label: "公開サイト"},
  },
    {
    name: "アーヴァインシステムズでのインターン",
    languages: ["Python"],
    keywords: ["Python", "Flask", "Docker","アーヴァインシステムズ"],
    description: "アーヴァインシステムズにてインターンとして参加し、Flaskを用いたWebアプリケーションの開発に従事しました。Dockerを活用して開発環境を構築し、効率的な開発プロセスを実現しました。",
    type: "インターン",
    publicUrl: {url: "https://irvinesystems.co.jp/", label: "会社サイト"},
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
  <main className="projects-wrapper">
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>

      {/* Controls */}
      <div className="projects-controls">
        <input
          type="text"
          placeholder="検索（キーワード・言語・種別）..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="projects-input"
        />

        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="projects-select"
        >
          <option value="All">All</option>
          <option value="個人">個人</option>
          <option value="チーム">チーム</option>
          <option value="インターン">インターン</option>
        </select>

        <button
          onClick={() => {
            setQuery("");
            setTypeFilter("All");
            setLangFilters([]);
          }}
          className="projects-reset"
        >
          Reset
        </button>
      </div>

      {/* Language toggles */}
      <div className="projects-lang-filters">
        {availableLangs.map(lang => (
          <button
            key={lang}
            onClick={() => toggleLang(lang)}
            className={`projects-lang-btn ${
              langFilters.includes(lang) ? "projects-lang-active" : ""
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map(p => (
          <article key={p.name} className="project-card">
            <div>
              <div className="project-header">
                <strong>{p.name}</strong>
                <span
                  className={`project-badge ${
                    p.type === "個人"
                      ? "badge-personal"
                      : p.type === "インターン"
                      ? "badge-intern"
                      : "badge-team"
                  }`}
                >
                  {p.type}
                </span>
              </div>

              <div className="project-lang-tags">
                {p.languages.map(lang => (
                  <span key={lang} className="project-lang-tag">
                    {lang}
                  </span>
                ))}
              </div>

              <div>
                <strong className="projects-keyword-title">
                  キーワード:
                </strong>{" "}
                {p.keywords.join(", ")}
              </div>

              <div>
                <strong className="projects-keyword-title">
                  説明:
                </strong>
                <p className="project-description">{p.description}</p>
              </div>
            </div>

            <div className="project-links">
              {p.repo && (
                <a
                  href={p.repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.repo.label}
                  className="project-icon-btn"
                >
                  <FaGithub size={20} />
                </a>
              )}

              {p.publicUrl && (
                <a
                  href={p.publicUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-public-btn"
                >
                  {p.publicUrl.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="project-empty">
          該当するプロジェクトはありません
        </div>
      )}
    </section>
  </main>
);
}
