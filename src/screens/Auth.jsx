import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { trackEvent } from '../lib/analytics';

export default function Auth({ session }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) navigate('/lobby');
  }, [session, navigate]);

  const handleEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const normalizedEmail = email.trim().toLowerCase();
    const autoPass = 'nerdtrivia-' + normalizedEmail;

    // Try sign in first (returning player)
    const { error: signInErr } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password: autoPass,
    });

    if (!signInErr) {
      setLoading(false);
      return; // session listener will redirect
    }

    // New player — sign up
    trackEvent('trivia_signup');
    const { error: signUpErr } = await supabase.auth.signUp({
      email: normalizedEmail,
      password: autoPass,
      options: { data: { display_name: normalizedEmail.split('@')[0] } },
    });

    if (signUpErr) {
      if (signUpErr.message?.includes('already') || signUpErr.status === 422) {
        setError('Este email ya fue utilizado. Solo se permite un intento.');
      } else {
        setError(signUpErr.message);
      }
      setLoading(false);
      return;
    }

    // Auto sign-in after signup
    await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password: autoPass,
    });

    setLoading(false);
  };

  return (
    <div className="screen fade-in">
      <h2 style={{ fontSize: '1.8rem' }}>¡A jugar!</h2>
      <p style={{ color: 'var(--muted)', textAlign: 'center' }}>
        Ingresa tu email para competir en la clasificación
      </p>

      <form onSubmit={handleEmail} style={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
          style={{
            padding: 14,
            borderRadius: 8,
            border: '1px solid var(--muted)',
            background: 'var(--bg)',
            color: 'var(--white)',
            fontSize: '1.1rem',
            textAlign: 'center',
          }}
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Cargando...' : '🚀 Comenzar'}
        </button>
      </form>

      {error && (
        <p style={{ color: 'var(--red)', textAlign: 'center', fontSize: '0.9rem' }}>
          {error}
        </p>
      )}

      <button
        onClick={() => navigate('/')}
        style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '0.9rem' }}
      >
        ← Volver
      </button>
    </div>
  );
}
