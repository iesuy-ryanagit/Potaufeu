import React, { useEffect, useRef, useState, useMemo } from 'react';

// images
import wallImg from '../images/wall.png';
import floorImg from '../images/floor.png';
import coinImg from '../images/coin.png';
import goalImg from '../images/goal.png';
import playerImg from '../images/player.png';

const TILE = 40;

const images = {
  wall: new Image(),
  floor: new Image(),
  coin: new Image(),
  goal: new Image(),
  player: new Image(),
};

images.wall.src = wallImg;
images.floor.src = floorImg;
images.coin.src = coinImg;
images.goal.src = goalImg;
images.player.src = playerImg;

// ======================
// CONFIG（設計図）
// ======================
const initialMapText =
`1111111
1..C.G1
1.1.1.1
1P....1
1111111`;

type Pos = { x: number; y: number };

// ======================
// utils
// ======================
const parseMap = (text: string) =>
  text.split('\n').map(l => l.split(''));

const findPlayer = (map: string[][]): Pos => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 'P') return { x, y };
    }
  }
  return { x: 1, y: 1 };
};

const countCoins = (map: string[][]) =>
  map.flat().filter(c => c === 'C').length;

// ======================
// COMPONENT
// ======================
const SoLongCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ======================
  // CONFIG（編集可能）
  // ======================
  const [mapText, setMapText] = useState(initialMapText);

  const baseMap = useMemo(() => parseMap(mapText), [mapText]);

  // ======================
  // GAME STATE（ここが本体）
  // ======================
  const [nowMap, setNowMap] = useState<string[][]>(() =>
    baseMap.map(r => [...r])
  );

  const [player, setPlayer] = useState<Pos>(() => findPlayer(baseMap));
  const [coins, setCoins] = useState(() => countCoins(baseMap));

  // ======================
  // RESET（config → gameへ反映）
  // ======================
  const resetGameFromConfig = () => {
    const m = parseMap(mapText);
    setNowMap(m.map(r => [...r]));
    setPlayer(findPlayer(m));
    setCoins(countCoins(m));
  };

  // config変更 → リセット扱い（重要）
  useEffect(() => {
    resetGameFromConfig();
  }, [mapText]);

  // ======================
  // DRAW
  // ======================
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, 400, 300);

    nowMap.forEach((row, y) => {
      row.forEach((cell, x) => {
        const px = x * TILE;
        const py = y * TILE;

        ctx.drawImage(images.floor, px, py, TILE, TILE);

        if (cell === '1') ctx.drawImage(images.wall, px, py, TILE, TILE);
        if (cell === 'C') ctx.drawImage(images.coin, px, py, TILE, TILE);
        if (cell === 'G') ctx.drawImage(images.goal, px, py, TILE, TILE);
      });
    });

    ctx.drawImage(
      images.player,
      player.x * TILE,
      player.y * TILE,
      TILE,
      TILE
    );
  };

  // ======================
  // MOVE（nowMapだけ変更）
  // ======================
  const move = (dx: number, dy: number) => {

    const nx = player.x + dx;
    const ny = player.y + dy;

    const cell = nowMap[ny]?.[nx];
    if (!cell || cell === '1') return;

    const updated = nowMap.map(r => [...r]);

    if (cell === 'C') {
      updated[ny][nx] = '.';
      setCoins(c => c - 1);
    }

    if (cell === 'G' && coins === 0) {
      alert('クリア！');
    }

    setNowMap(updated);
    setPlayer({ x: nx, y: ny });
  };

  // ======================
  // EDIT（configだけ編集）
  // ======================
  const toggleWall = (x: number, y: number) => {

    const m = parseMap(mapText);

    m[y][x] = m[y][x] === '1' ? '0' : '1';

    setMapText(m.map(r => r.join('')).join('\n'));
  };

  const getTile = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();

    return {
      x: Math.floor((e.clientX - rect.left) / TILE),
      y: Math.floor((e.clientY - rect.top) / TILE),
    };
  };

  // ======================
  // KEY INPUT
  // ======================
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'w') move(0, -1);
      if (e.key === 's') move(0, 1);
      if (e.key === 'a') move(-1, 0);
      if (e.key === 'd') move(1, 0);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [player, nowMap, coins]);

  // ======================
  // DRAW EFFECT
  // ======================
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) draw(ctx);
  }, [nowMap, player]);

  // ======================
  // UI
  // ======================
  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        padding: 20,
        alignItems: 'flex-start',
      }}
    >
  
      {/* ======================
          LEFT: CONFIG
      ====================== */}
      <div style={{ width: 260 }}>
        <h3>map.ber</h3>
  
        <textarea
          value={mapText}
          onChange={(e) => setMapText(e.target.value)}
          style={{
            width: '100%',
            height: 180,
            fontFamily: 'monospace',
            fontSize: 12,
            padding: 8,
          }}
        />
  
        <div style={{ marginTop: 12 }}>
          <button onClick={resetGameFromConfig}>Reset</button>
        </div>
  
        <div style={{ marginTop: 12, fontSize: 12 }}>
          <p>Coins: {coins}</p>
        </div>
      </div>
  
      {/* ======================
          RIGHT: GAME
      ====================== */}
      <div>
        <h3>Game</h3>
  
        <canvas
          ref={canvasRef}
          width={280}
          height={200}
          onClick={(e) => {
            const { x, y } = getTile(e);
            toggleWall(x, y);
          }}
          style={{
            border: '2px solid #333',
            imageRendering: 'pixelated',
          }}
        />
      </div>
  
    </div>
  );
};

export default SoLongCanvas;