
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <main style={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>自己紹介</h2>
        <p style={{ fontSize: '1.1rem', color: '#333' }}>
          大学院で農業情報を学び、42Tokyoでコンピュータサイエンスを修了。農業分野の現場課題を技術で解決することに情熱を注いでいます。
        </p>
      </section>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>スキル</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>プログラミング言語</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>C++</li>
              <li>C</li>
              <li>Python</li>
              <li>Go</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>データベース</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>MySQL</li>
              <li>MariaDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>42Tokyo</h2>
        <p>
          <a href="https://42tokyo.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            エンジニア養成機関42Tokyo
          </a>
          を2023年より大学と並行して通い、1年半で必修課程を修了しました。
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <Link to="/Potaufeu/fttokyo" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              42Tokyo Project（プロジェクトページへ）
            </Link>
          </li>
        </ul>
      </section>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>研究</h2>
        <p>大学院で農業に画像処理技術を活用する研究に従事しています。</p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>学会発表:
            <a href="https://www.jsai.or.jp/%E5%B9%B4%E6%AC%A1%E5%A4%A7%E4%BC%9A%E7%AD%89" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              農業情報学会
            </a>
          </li>
          <li>論文:
            <a href="https://www.mdpi.com/2673-4117/6/9/232" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Estimation of Growth Parameters of Eustoma grandiflorum Using Smartphone 3D Scanner
            </a>
          </li>
          <li>
            所属研究室：
            <a href="https://joho.en.a.u-tokyo.ac.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              研究室サイト
            </a>
          </li>
        </ul>
      </section>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>各種リンク</h2>
        <a
          href="https://github.com/iesuy-ryanagit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', verticalAlign: 'middle', color: '#222' }}
        >
          <FaGithub size={32} />
        </a>
      </section>
    </main>
  );
};

export default Home;
