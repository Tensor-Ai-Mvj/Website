import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Blog from './pages/Blog';
import About from './pages/About';
import JoinClub from './pages/JoinClub';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/join" element={<JoinClub />} />
    </Routes>
  );
};

export default AppRoutes;
