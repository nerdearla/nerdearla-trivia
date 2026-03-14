export default function Landing() {
  const winners = [
    { place: '🥇', name: 'elealleguefx', score: 3853 },
    { place: '🥈', name: 'a.perez', score: 3804 },
    { place: '🥉', name: 'aldexdev', score: 3766 },
  ];

  return (
    <div className="screen fade-in">
      <div style={{ textAlign: 'center' }}>
        <img src="/logo-nerdearla.png" alt="Nerdearla" style={{ width: '100%', marginBottom: 12 }} />
        <h1 style={{ fontSize: '2.5rem', lineHeight: 1.1, marginBottom: 8 }}>
          <span style={{ color: 'var(--yellow)' }}>Trivia</span>
        </h1>
      </div>

      <div className="card" style={{ width: '100%', textAlign: 'center', padding: '24px 16px' }}>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: 16 }}>
          ¡La trivia ha finalizado! 🎉
        </p>
        <h2 style={{ color: 'var(--yellow)', fontSize: '1.5rem', marginBottom: 20 }}>
          🏆 Ganadores
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {winners.map((w) => (
            <div key={w.name} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '14px 16px',
            }}>
              <span style={{ fontSize: '1.8rem' }}>{w.place}</span>
              <span style={{ flex: 1, fontWeight: 700, fontSize: '1.1rem', textAlign: 'left' }}>{w.name}</span>
              <span style={{ color: 'var(--yellow)', fontWeight: 700, fontSize: '1.1rem', fontFamily: "'Rift Soft', 'Arial Black', sans-serif" }}>
                {w.score}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', textAlign: 'center' }}>
        ¡Gracias a todos por participar!<br />Nos vemos en la próxima Nerdearla 🚀
      </p>
    </div>
  );
}
