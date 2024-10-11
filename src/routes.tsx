import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Email from '@/pages/Email';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;