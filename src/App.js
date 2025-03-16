import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MyNav from './components/MyNav';
import OldResult from './components/_old/OldResult';
import SearchResultsPage from './components/SearchResultsPage';
import ScoreDetailPage from './components/ScoreDetailPage';
import BasePage from './components/BasePage';
import ReferenceRoot from './components/reference/ReferenceRoot';

const App = () => {
  return (
    <BasePage>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/old_result" element={<OldResult />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/reference/*" element={<ReferenceRoot />} />
          <Route path="/score" element={<ScoreDetailPage />} />
        </Routes>
        <MyNav></MyNav>
      </Router>
    </BasePage>
  );
};

export default App;
