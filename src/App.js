import { RouterProvider } from 'react-router-dom';
import './App.css';
import './module/routes';
import Aos from 'aos';
import router from './module/routes';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
