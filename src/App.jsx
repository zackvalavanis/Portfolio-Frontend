import './App.css';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { MainPage } from './MainPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Blog } from './Blog.jsx'


function App() {
  return (
    <Router>
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* Default/Home page */}
        <Route path="/Blog" element={<Blog/>} />  Another page
      </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
