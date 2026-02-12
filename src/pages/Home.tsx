import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <main className="home-wrapper">
      
      <section className="home-section">
        <h2 className="home-title">自己紹介</h2>
        <p className="home-text">
          大学院で農業情報を学び、42Tokyoでコンピュータサイエンスを修了。
          農業分野の現場課題を技術で解決することに情熱を注いでいます。
        </p>
      </section>
      <section className="home-section">
        <h2 className="home-title">研究</h2>
        <p className="home-text">
          大学院で農業に画像処理技術を活用する研究に従事しています。
          営農現場における情報処理技術の活用について研究しております。
        </p>

        <ul className="home-list">
          <li>
            <Link to="/study" className="home-link">
              研究ページへ
            </Link>
          </li>
        </ul>
      </section>

      <section className="home-section" style={{ textAlign: "center" }}>
        <h2 className="home-title">Githubリンク</h2>
        <a
          href="https://github.com/iesuy-ryanagit"
          target="_blank"
          rel="noopener noreferrer"
          className="home-github"
        >
          <FaGithub size={36} />
        </a>
      </section>

    </main>
  );
};

export default Home;
