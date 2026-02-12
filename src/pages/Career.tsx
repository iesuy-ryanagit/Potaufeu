
export default function Career() {
  const careers = [
    {
      period: "2021.04 - 2025.03",
      title: "東京大学 農学部",
      description: "農業情報について学びました。プログラミングや統計、データ解析など幅広く学び、卒業論文では機械学習を用いた研究を行いました。",
      technology: "Python,PyTorch,Open3D,OpenCV,Cuda",
      category: "学歴",
      links: { label: "公式サイト", url: "https://joho.en.a.u-tokyo.ac.jp/" },
    },
    {
      period: "2024.04 - 現在",
      title: "東京大学大学院 農学生命科学研究科",
      description: "研究テーマ: スマート農業などについて研究しています。PointNet/PointNet++などの機械学習や三次元点群を対象とするデータ処理や統計などを扱います。",
      technology: "Python,PyTorch,Open3D,OpenCV,Linux",
      category: "学歴",
      links: { label: "公式サイト", url: "https://joho.en.a.u-tokyo.ac.jp/" },
    },
    {
      period: "2023.09 - 2024.3",
      title: "42Tokyo",
      description: "低レイヤーからWeb開発まで幅広く学習。bashやNginxなどの再実装やWebアプリゲーム開発チーム開発を経験。",
      technology: "C,C++,Python,Django,MySQL,Docker,Virtual Machine,Linux",
      category: "スクール",
      links: { label: "公式サイト", url: "https://42tokyo.jp/" },
    },
    {
      period: "2023.03 - 2023.05",
      title: "株式会社Almondo",
      description: "生成AIコミュニティ「ExSeed」の運営を担当。AIの最新情報の収集やイベント企画などを行いました。",
      technology: "Python,Streamlit,GAS,Github Actions",
      category: "インターン",
      links: { label: "公式サイト", url: "https://almondotech.com/" },
    },
    {
      period: "2025.04 - 現在",
      title: "株式会社Irvine Systems",
      description: "Web開発のインターン。ソフトウェアエンジニアとしてFlaskを用いたWebアプリケーションの設計・開発・テストなどさまざまな工程を担当しています。",
      technology: "Python Flask",
      category: "インターン",
      links: { label: "公式サイト", url: "https://irvinesystems.co.jp/" },
    },
  ];

  const grouped = careers.reduce((acc, c) => {
    if (!acc[c.category]) acc[c.category] = [];
    acc[c.category].push(c);
    return acc;
  }, {} as Record<string, typeof careers>);

  return (
    <main style={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
    <section
      style={{
        background: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: 900,
      }}
    >
      <h1 style={{ color: "#2563eb", marginBottom: "1rem" }}>Career</h1>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#333", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            {category}
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((c, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "1rem",
                  borderLeft: "3px solid #2563eb",
                  paddingLeft: "1rem",
                }}
              >
                <div style={{ fontSize: "0.9rem", color: "#666" }}>{c.period}</div>
                <strong style={{ fontSize: "1.05rem", display: "block", marginBottom: 4 }}>
                  {c.title}
                </strong>

                {/* リンクを見やすく */}
                {c.links && (
                  <a
                    href={c.links.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      color: "#2563eb",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {c.links.label}{" "}
                    <svg    width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 3H21V9" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 14L21 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
                {c.technology && (
                  <div style={{ fontSize: "0.9rem", color: "#444", marginBottom: "0.5rem" }}>
                    <span style={{ fontWeight: 600, color: "#2563eb" }}>技術:</span> {c.technology}
                  </div>
                )}
                <p style={{ margin: 0, color: "#555" }}>{c.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </main>
  );
}
