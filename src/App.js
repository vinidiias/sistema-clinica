import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './components/layout/NavBar';

import Login from './components/pages/Login';
import Ficha from './components/pages/Ficha';
import About from './components/pages/About';
import Contato from './components/pages/Contato';

import Footer from "./components/layout/Footer";
import ErrorPage from "./components/layout/ErrorPage";
import Container from './components/layout/Container';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
            <Container customClass="height">
              <Login />
            </Container>
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
            <Container customClass="height">
              <About />
            </Container>
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
            <Container customClass="height">
              <Contato />
            </Container>
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
            <Container customClass="height">
              <Ficha />
            </Container>
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
