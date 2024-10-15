import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './components/layout/NavBar';

import Login from './components/pages/Login';
import Ficha from './components/pages/Ficha';
import About from './components/pages/About';
import Contato from './components/pages/Contato';

import Footer from "./components/layout/Footer";
import ErrorPage from "./components/layout/ErrorPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
            <Login />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/about',
      element: (
        <>
          <NavBar />
            <About />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/contact',
      element: (
        <>
          <NavBar />
            <Contato />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/ficha',
      element: (
        <>
          <NavBar />
            <Ficha />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}

export default App;
