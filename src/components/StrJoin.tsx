import React, { useState } from 'react';

type Step = {
  title: string;
  detail: string;
};

const StrJoin = () => {
  const [s1, setS1] = useState('');
  const [s2, setS2] = useState('');
  const [steps, setSteps] = useState<Step[]>([]);
  const [result, setResult] = useState('');
  const [running, setRunning] = useState(false);

  const sleep = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  const run = async () => {
    if (running) return;

    setRunning(true);
    setSteps([]);
    setResult('');

    const len1 = s1.length;
    const len2 = s2.length;
    const total = len1 + len2;

    // ======================
    // STEP 1: length
    // ======================
    setSteps(prev => [
      ...prev,
      {
        title: 'Step 1',
        detail: `ft_strlen(s1) = ${len1}, ft_strlen(s2) = ${len2}`,
      },
    ]);
    await sleep(600);

    // ======================
    // STEP 2: malloc
    // ======================
    setSteps(prev => [
      ...prev,
      {
        title: 'Step 2',
        detail: `malloc(${total + 1}) → buffer確保`,
      },
    ]);
    await sleep(600);

    // ======================
    // STEP 3: copy s1
    // ======================
    let buffer = '';

    for (let i = 0; i < s1.length; i++) {
      buffer += s1[i];
    }

    setSteps(prev => [
      ...prev,
      {
        title: 'Step 3',
        detail: `copy s1 → "${buffer}"`,
      },
    ]);
    await sleep(600);

    // ======================
    // STEP 4: copy s2
    // ======================
    for (let i = 0; i < s2.length; i++) {
      buffer += s2[i];
    }

    setSteps(prev => [
      ...prev,
      {
        title: 'Step 4',
        detail: `copy s2 → "${buffer}"`,
      },
    ]);
    await sleep(600);

    // ======================
    // FINAL
    // ======================
    setResult(buffer);

    setSteps(prev => [
      ...prev,
      {
        title: 'Done',
        detail: `result = "${buffer}"`,
      },
    ]);

    setRunning(false);
  };

  return (
    <div style={{ display: 'flex', gap: 20 }}>

      {/* ======================
          INPUT
      ====================== */}
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: 10 }}>Input</h3>

        <input
          placeholder="string 1"
          value={s1}
          onChange={e => setS1(e.target.value)}
          style={{
            width: '100%',
            padding: 8,
            marginBottom: 10,
            border: '1px solid #ddd',
            borderRadius: 6,
          }}
        />

        <input
          placeholder="string 2"
          value={s2}
          onChange={e => setS2(e.target.value)}
          style={{
            width: '100%',
            padding: 8,
            marginBottom: 10,
            border: '1px solid #ddd',
            borderRadius: 6,
          }}
        />

        <button
          onClick={run}
          disabled={running}
          style={{
            width: '100%',
            padding: 10,
            background: running ? '#999' : '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          {running ? 'Running...' : 'Run ft_strjoin'}
        </button>
      </div>

      {/* ======================
          VISUALIZATION
      ====================== */}
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: 10 }}>Execution</h3>

        <div
          style={{
            minHeight: 120,
            padding: 10,
            background: '#f9fafb',
            border: '1px solid #eee',
            borderRadius: 8,
          }}
        >
          {steps.map((s, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <b>{s.title}</b> : {s.detail}
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 20 }}>Result</h3>

        <div
          style={{
            padding: 10,
            background: '#111',
            color: '#0f0',
            borderRadius: 6,
            fontFamily: 'monospace',
          }}
        >
          {result}
        </div>
      </div>
    </div>
  );
};

export default StrJoin;