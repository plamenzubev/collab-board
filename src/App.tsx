import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './features/auth/components/LoginForm';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
