import React from 'react';
import { Link } from 'react-router-dom';

const FTTokyo = () => {
  return (
    <main style={{ width: '100%', maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
    <section
        style={{
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        padding: '2rem',
        marginBottom: '2rem',
        border: '1px solid #e5e7eb',
        }}
    >
        <h2 style={{ color: '#2563eb', fontSize: '1.5rem', marginBottom: '1rem' }}>42Tokyo</h2>

        <p style={{ marginBottom: '1rem', color: '#333', lineHeight: 1.7 }}>
        <a
            href="https://42tokyo.jp/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
            エンジニア養成機関42Tokyo
        </a>
        とは、<strong>無料</strong>でコンピュータサイエンスの基礎を学べるプログラミングスクールです。
        </p>

        <p style={{ marginBottom: '1rem', color: '#333', lineHeight: 1.7 }}>
        スポンサーの方々の寄付により無料な反面、<strong style={{ color: '#dc2626' }}>課題を一定以上の速度で達成しないと退学</strong>になるシステムです。
        </p>

        <p style={{ marginBottom: '1rem', color: '#333', lineHeight: 1.7 }}>
        42Tokyoでは、C言語を中心とし、コンピュータサイエンスの基礎を個人及びチーム課題を通して学びます。課題の内容としては、Virtual Boxの設定、C言語の基本関数(libft,printf)の再実装、C++でのクラス設計、アルゴリズムの実装、ネットワークの学習、bashやNginxの再実装、Webアプリゲームの開発など多岐にわたります。
        私は、2023年より大学と並行して通い、1年半で必修課程を修了しました。
        </p>

        <ul style={{ paddingLeft: '1.2rem' }}>
        <li>
            <Link to="/Projects?q=42Tokyo" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            42Tokyoによるプロジェクト一覧へ
            </Link>
        </li>
        </ul>
    </section>
    </main>

  );
};

export default FTTokyo;
