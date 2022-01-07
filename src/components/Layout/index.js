import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import { Nav } from './styles';

export default function Layout({ 
  onToggleTheme, selectedTheme,
 }) {

  useEffect(()=> {
    function handleScroll(){
      console.debug('Scrolou');
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <BrowserRouter>
      <Header 
      onToggleTheme={onToggleTheme} 
      selectedTheme={selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/15132">Post</Link>
      </Nav>
      <Routes />
      <Footer 
      onToggleTheme={onToggleTheme} 
      selectedTheme={selectedTheme}
      />
    </BrowserRouter>
  );
}
