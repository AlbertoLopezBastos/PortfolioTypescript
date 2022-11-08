import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

import '../../styles/base.css';

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer content="© 2022 Alberto Lopez Bastos"/>
    </div>
  );
};

export default App;
