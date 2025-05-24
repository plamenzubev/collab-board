import { useEffect, useState, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../services/supabaseClient';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthed(!!session);
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return isAuthed ? children : <Navigate to="/login" replace />;
}
