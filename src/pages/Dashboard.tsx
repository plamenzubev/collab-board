import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function Dashboard() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setEmail(user?.email ?? null);
    };

    getUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      {email && <p className="mt-2 text-gray-600">Logged in as: {email}</p>}
    </div>
  );
}
