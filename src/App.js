
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';





function App() {
  useEffect(() => {
    // Apply .scrolled class to the body as the page is scrolled down
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }

    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    // Toggle mobile nav dropdowns
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });

    // Cleanup function
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.removeEventListener('click', function (e) {
          if (document.querySelector('.mobile-nav-active')) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
          }
        });
      });
    };
  }, []); // empty dependency array ensures that this effect runs only once on component mount

  return (

    <>
    <Topbar/>
    <Navbar/>
    
    <Footer/>
    </>

  );
}


export default App;
