import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Landing from './screens/Landing';
import Auth from './screens/Auth';
import Lobby from './screens/Lobby';
import Game from './screens/Game';
import Results from './screens/Results';
import Leaderboard from './screens/Leaderboard';
import LeaderboardMonitor from './screens/LeaderboardMonitor';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div className="screen"><div style={{ color: 'var(--muted)' }}>Loading...</div></div>;

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Landing />} />
        <Route path="/lobby" element={<Landing />} />
        <Route path="/game" element={<Landing />} />
        <Route path="/results" element={<Landing />} />
        <Route path="/leaderboard" element={<Landing />} />
        <Route path="/monitor" element={<LeaderboardMonitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
