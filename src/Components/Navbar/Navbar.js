import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import Logo from '../../images/ConnexIT.png';
import {BrowserRouter as Router,Route,Routes,NavLink } from "react-router-dom";
import About from '../About/About';
import Home from '../Home/Home';
import Events from '../Events&News/Events';
function Navbar() {

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
    <Router>
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        
        <NavLink to="" activeclassname='active-link' ><img src={Logo} alt="Logo" /></NavLink>
        
        <nav id="navmenu" className="navmenu">
          <ul>
          <NavLink to="/About" activeclassname='active-link' ><li>About Us</li></NavLink>
          <NavLink to="/About" activeclassname='active-link' ><li>Products</li></NavLink>
          <NavLink to="/About" activeclassname='active-link' ><li>Solutions</li></NavLink>
          <NavLink to="/Events&News" activeclassname='active-link' ><li>Event & News</li></NavLink>
          <NavLink to="/About" activeclassname='active-link' ><li>Portal</li></NavLink>
          <NavLink to="/About" activeclassname='active-link' ><li>Countries</li></NavLink>
             
        
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <NavLink to="/About" activeclassname='active-link'></NavLink><p className="btn-getstarted">Contact Us</p>
      </div>
    </header>
     
     
     <Routes>
    
       <Route path=""  Component={Home}></Route>
       <Route path="/About"  Component={About}></Route>
       <Route path="/Events&News"  Component={Events}></Route>
       
     </Routes>
 
     </Router>

     </>
  );
}

export default Navbar;
