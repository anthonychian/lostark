import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import MyBuilds from './pages/MyBuilds'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'

import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'


export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/mybuilds" element={<MyBuilds />} />
          <Route exact path="/login" element={<LogInPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticlesListPage />} />
          <Route path="/article/:name" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
        
      </Router>
    </AuthProvider>
  );
}