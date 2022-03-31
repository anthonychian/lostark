import Navbar from "./components/Navbar"
import HomePage from './pages/HomePage'
import MyBuilds from "./pages/MyBuilds"

import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/mybuilds" element={<MyBuilds />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticlesListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
        
      </Router>
    </>
  );
}