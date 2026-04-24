import React from 'react';
import SoLongCanvas from '../components/SoLongCanvas';

const SoLong = () => {
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
          So_Long
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
        <h2 style={{ marginBottom: 16, fontSize: 18 }}>🎮 Game Demo</h2>
        <SoLongCanvas />
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
          so_longは、マップ上でキャラクターを操作し、アイテムを集めてゴールを目指す2Dゲームです。
          独自の.ber形式マップを読み込み、ゲームとして解釈する仕組みを実装しました。
          課題では有効なマップの判定に加え、ボーナスでは敵の実装などを行いました。
          
        </p>

        <p style={{ lineHeight: 1.7, color: '#333', marginTop: 10 }}>
          マップ要素：
          <br />
          <b>#</b> = 壁 / <b>.</b> = 空地 / <b>C</b> = コイン / <b>E</b> = ゴール / <b>P</b> = プレイヤー
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginTop: 10 }}>
          操作キー：
          <br />
          <b>W</b> = 上 / <b>S</b> = 下 / <b>D</b> = 右 / <b>A</b> = 左
        </p>
      </section>

      {/* =====================
          TECH
      ===================== */}
      <section>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>技術スタック</h2>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['C言語', 'MiniLibX', 'パース'].map((t) => (
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

export default SoLong;