import './App.css';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { MainPage } from './MainPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
