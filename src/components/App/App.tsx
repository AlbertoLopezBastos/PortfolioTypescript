import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';
import '../../styles/base.css';

import {ThemeContext, Theme} from '../../ThemeContext';
import { useState } from 'react';

const App = () => {

  const [theme, setTheme] = useState(Theme.Dark);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className='container' id={theme}>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer content="© 2022 Alberto Lopez Bastos"/>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
