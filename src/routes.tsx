import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoaderCircle } from 'lucide-react';

const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <LoaderCircle className="animate-spin" size={48} />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;