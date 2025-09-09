import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortenerPage from './components/URLShortenerPage';
import StatisticsPage from './components/StatisticsPage';
import RedirectHandler from './components/RedirectHandler';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<URLShortenerPage />} />
        <Route path='/statistics' element={<StatisticsPage />} />
        <Route path='/:shortcode' element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}
export default App;