
import Project from '../ui/Project';
import Images from '../Images';

import s from './Projects.module.css';

const title = 'Projects';

const Projects = () => {
  return (
    <section id="projects" className={s.projects}>
      <div className={s.title}>{title}</div>

      <div className={s.grid}>
        <Project img={Images.kimi} name="Kimi" website="https://www.kimiartesanal.com.ar" github="https://github.com/AlbertoLopezBastos/kimiwebreact"/>

        <Project img={Images.movies} name="Movies" website="https://albertolopezbastos.github.io/movies" github="https://github.com/AlbertoLopezBastos/movies"/>
      </div>
    </section>
  )
};

export default Projects;
