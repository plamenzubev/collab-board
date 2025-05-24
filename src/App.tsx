import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './features/auth/components/LoginForm';
import Dashboard from './pages/Dashboard';
import AppLayout from './components/layout/AppLayout';
import ProtectedRoute from './app/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginForm />} />

      {/* Protected */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
