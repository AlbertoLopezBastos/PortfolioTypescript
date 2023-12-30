
import Project from '../ui/Project';
import Images from '../Images';

import s from './Projects.module.css';


const Projects = () => {
  return (
    <section id="projects" className={s.projects}>
      <div className={s.title}>My <span className='textGradient'>Work</span></div>

      <div className={s.grid}>
        <Project img={Images.movies} name="Movies" website="https://albertolopezbastos.github.io/movies" github="https://github.com/AlbertoLopezBastos/movies"/>
        <Project img={Images.tictactoe} name="Tic Tac Toe" website="https://albertolopezbastos.github.io/tictactoe" github="https://github.com/AlbertoLopezBastos/tictactoe"/>
        <Project img={Images.mytunes} name="My Tunes clone" website="https://my-tunes-responsive.netlify.app/" github="https://github.com/AlbertoLopezBastos/my-tunes"/>
        <Project img={Images.netflix} name="Netflix clone" website="https://netflix-clone-responsive.netlify.app/" github="https://github.com/AlbertoLopezBastos/netflix-clone"/>
        <Project img={Images.expensify} name="Expensify" website="https://lopez-expensify.herokuapp.com/dashboard" github="https://github.com/AlbertoLopezBastos/expensify-app"/>
        <Project img={Images.acme} name="Acme Photography" website="https://acme-photography-mobile-frist.netlify.app/" github="https://github.com/AlbertoLopezBastos/acme-photography"/>
        <Project img={Images.carrito} name="Universidad" website="https://universidad-shopping-cart.netlify.app/" github="https://github.com/AlbertoLopezBastos/Carrito-compras"/>
        <Project img={Images.affwebdes} name="Acme Web Design" website="https://acme-web-design-responsive.netlify.app/" github="https://github.com/AlbertoLopezBastos/Professional-Web-Design"/>
        <Project img={Images.pomodoro} name="Pomodoro React" website="https://albertolopezbastos.github.io/pomodororeact/" github="https://github.com/AlbertoLopezBastos/pomodororeact"/>
        <Project img={Images.kimi} name="Kimi Web" website="https://www.kimiartesanal.com.ar" github="https://github.com/AlbertoLopezBastos/kimiwebreact"/>
      </div>
    </section>
  )
};

export default Projects;
