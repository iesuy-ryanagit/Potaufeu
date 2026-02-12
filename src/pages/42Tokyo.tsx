import React from "react";
import { Link } from "react-router-dom";

const FTTokyo = () => {
  return (
    <main className="ft-wrapper">
      <section className="ft-section">
        <h2 className="ft-title">42Tokyo</h2>

        <p className="ft-text">
          <a
            href="https://42tokyo.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-link"
          >
            エンジニア養成機関42Tokyo
          </a>
          とは、<strong>無料</strong>でコンピュータサイエンスの基礎を学べるプログラミングスクールです。
        </p>

        <p className="ft-text">
          スポンサーの方々の寄付により無料な反面、
          <strong className="ft-danger">
            課題を一定以上の速度で達成しないと退学
          </strong>
          になるシステムです。
        </p>

        <p className="ft-text">
          42Tokyoでは、C言語を中心とし、コンピュータサイエンスの基礎を
          個人及びチーム課題を通して学びます。
          VirtualBoxの設定、C言語の基本関数(libft, printf)の再実装、
          C++でのクラス設計、アルゴリズム実装、ネットワーク、
          bashやNginxの再実装、Webアプリ開発など多岐にわたります。
          私は2023年より大学と並行して通い、1年半で必修課程を修了しました。
        </p>

        <ul className="ft-list">
          <li>
            <Link to="/Projects?q=42Tokyo" className="ft-link">
              42Tokyoによるプロジェクト一覧へ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default FTTokyo;
