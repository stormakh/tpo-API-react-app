import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import LogIn from './pages/LogIn';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/LogIn",
    element: <LogIn/>,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
