import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/styles.css';  // スタイルを読み込む

const Home = () => {
  return (
      <div className="portfolio">
        <header>
          <h1>Ryanagit</h1>
        </header>

        {/* メニューとリンク */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>  {/* ホームページへのリンク */}
            </li>
          </ul>
        </nav>

        {/* セクションごとの内容 */}
        <section>
          <h2>自己紹介</h2>
          <p>私は大学院で農業情報を学び、42Tokyoでコンピュータサイエンスを学びました。特に、農業分野の現場の課題を解決するために技術を活用することに情熱を注いでいます。</p>
        </section>
        <section>
          <h2>スキル</h2>
          <h3>プログラミング言語</h3>
          <ul>
            <li>C++</li>
            <li>C</li>
            <li>Python</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML / CSS</li>
          </ul>
          <h3>データベース</h3>
          <ul>
              <li>MySQL</li>
              <li>MariaDB</li>
              <li>PostgreSQL</li>
          </ul>
        </section>

        <section>
          <h2>42Tokyo</h2>
          <p><a href="https://42tokyo.jp/" target="_blank" rel="noopener noreferrer">エンジニア養成機関42Tokyo</a>を2023年より大学と並行して通い、1年半で必修課程を修了しました。</p>
          <ul>
            <li><Link to="/fttokyo">42Tokyo Project</Link>（プロジェクトページへ）</li>
          </ul>
        </section>
        <section>
          <h2>研究</h2>
          <p>私は大学院で農業に画像処理技術を活用する研究に従事しております</p>
          <p>
            学会発表(予定)
          </p>
          <p>
            論文(予定)
          </p>
          <p>
            所属研究室:<a href="https://joho.en.a.u-tokyo.ac.jp/" target="_blank" rel="noopener noreferrer">研究室サイト</a>
          </p>
        </section>
        <section>
          <h2>各種リンク</h2>
          <p>
            私のプロジェクトの一部は <a href="https://github.com/iesuy-ryanagit" target="_blank" rel="noopener noreferrer">GitHub</a> で見ることができます。
          </p>
        </section>
        
        <footer>
          <p>© 2025 Ryanagit</p>
        </footer>
      </div>
  );
};

export default Home;
