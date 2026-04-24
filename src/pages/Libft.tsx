import React from 'react';
import StrJoin from '../components/StrJoin';

const Libft = () => {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'system-ui, sans-serif',
        color: '#111',
      }}
    >

      {/* =====================
          TITLE
      ===================== */}
      <section style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 8,
            color: '#2563eb',
          }}
        >
          Libft
        </h1>
      </section>

      {/* =====================
          GAME CARD
      ===================== */}
      <section
        style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          padding: 20,
          marginBottom: 40,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <h2 style={{ marginBottom: 16, fontSize: 18 }}>Example</h2>
        <StrJoin />
      </section>

      {/* =====================
          OVERVIEW
      ===================== */}
      <section
        style={{
          marginBottom: 40,
          paddingLeft: 12,
          borderLeft: '4px solid #2563eb',
        }}
      >
        <h2 style={{ fontSize: 20, marginBottom: 10 }}>概要</h2>

        <p style={{ lineHeight: 1.7, color: '#333' }}>
            libftは、C言語で基本的な関数を再実装するプロジェクトで、文字列操作やメモリ管理などの関数を自分で作成します。これにより、C言語の基礎を深く理解し、独自の関数ライブラリを構築することができます。
            mallocやfreeなどのメモリ管理関数、文字列操作関数（strlen、strcpyなど）、リスト操作関数など、様々な関数を実装することで、C言語の基本的な機能を自分の手で作り上げる経験が得られます。
          
        </p>
      </section>

      {/* =====================
          TECH
      ===================== */}
      <section>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>技術スタック</h2>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['C言語', 'メモリ'].map((t) => (
            <span
              key={t}
              style={{
                padding: '6px 10px',
                background: '#e0e7ff',
                color: '#1e3a8a',
                borderRadius: 999,
                fontSize: 12,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Libft;