import './App.css';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { MainPage } from './MainPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyInterests } from './MyInterests.jsx'


function App() {
  return (
    <Router>
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* Default/Home page */}
        <Route path="/MyInterests" element={<MyInterests/>} />  Another page
      </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
