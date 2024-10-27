import './App.css';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { MainPage } from './MainPage.jsx'
import { Contact } from './Contact.jsx'
import { AboutMe } from './AboutMe.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  { 
    element: ( 
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ), 
    children: [
      { 
        path: '/', 
        element: <MainPage />
      }, 
      { 
        path: '/contact', 
        element: <Contact />
      }, 
      { 
        path: '/About', 
        element: <AboutMe />
      }
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
