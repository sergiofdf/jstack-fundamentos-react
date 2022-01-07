import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

 

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme(){
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  };

  const firsRender = useRef(true)

  useEffect(() => {
    if(firsRender.current){
      firsRender.current = false
      return;
    }
    console.debug('useEffect executou');
  },[theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
      onToggleTheme={handleToggleTheme}
      selectedTheme={theme}
      />
    </ThemeProvider>
  );
};

export default App;
