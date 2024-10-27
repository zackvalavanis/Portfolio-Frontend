import './App.css';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { MainPage } from './MainPage.jsx'

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
