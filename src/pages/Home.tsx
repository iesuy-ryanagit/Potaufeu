
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
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>42Tokyo</h2>
        <p>
          <a href="https://42tokyo.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            エンジニア養成機関42Tokyo
          </a>
          を2023年より大学と並行して通い、1年半で必修課程を修了しました。
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>
            <Link to="/fttokyo" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              What is 42Tokyo?
            </Link>
          </li>
        </ul>
      </section>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>研究</h2>
        <p>大学院で農業に画像処理技術を活用する研究に従事しています。営農現場における情報処理技術の活用について研究しております。
            
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
            <Link to="/study" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              研究ページへ
            </Link>
        </ul>
      </section>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>Githubリンク</h2>
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
