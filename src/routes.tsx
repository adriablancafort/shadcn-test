import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoaderCircle } from 'lucide-react';

const Home = lazy(() => import('@/pages/Home'));
const Email = lazy(() => import('@/pages/Email'));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <LoaderCircle className="animate-spin" size={48} />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;