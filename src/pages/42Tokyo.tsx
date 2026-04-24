import React from 'react';
import { Link } from 'react-router-dom';

const FTTokyo = () => {
  return (
    <main style={{ width: '100%', maxWidth: 700, margin: '0 auto', padding: '2rem 1rem' }}>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>42Tokyo</h2>
        <p>
          <a href="https://42tokyo.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            エンジニア養成機関42Tokyo
          </a>
          を2023年より大学と並行して通い、1年半で必修課程を修了しました。42Tokyoでは、個人課題やチームプロジェクトを通じて実践的なスキルを身につけました。
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <Link to="/Projects?q=42Tokyo" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              42Tokyoによるプロジェクト一覧へ
            </Link>
          </li>
        </ul>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <Link to="/projects/libft" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              libft
            </Link>
          </li>
        </ul>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <Link to="/projects/so_long" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              so_long（2Dゲーム）
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FTTokyo;
