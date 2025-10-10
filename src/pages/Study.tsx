
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Study = () => {
  return (
    <main style={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <section style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>研究</h2>
        <p>現在、大学院で農業に画像処理技術を活用する研究に従事しています。</p>
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
            <li>
            企画発表：
            <a href="https://agrinfo.en.a.u-tokyo.ac.jp/meetings/anounce-50.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
              農業農村地域における情報利活用の未来図Ⅳ
            </a>
          </li>
        </ul>
        </section>
    </main>
  );
};

export default Study;
