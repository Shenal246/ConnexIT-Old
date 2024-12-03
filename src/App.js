
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();

  return (

    <>
    <Topbar/>
    <Navbar/>
    
    <Footer/>
    </>

  );
}


export default App;
