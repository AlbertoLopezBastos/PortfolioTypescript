import Nav from '../Nav'; 
import s from './Home.module.css';
import SocialMediaIcon from '../ui/SocialMediaIcon';

const Home = () => {

  return (
    <section className={s.home}>
      <Nav/>

      <main className={s.hero}>
        <div className={s.heroPresentation}>
          <h1 className={s.headingOne}>Alberto <span className='textGradient'>Lopez Bastos </span></h1>

          <h2 className={s.headingTwo}>front-end javascript web developer </h2>
        </div>
        <aside className={s.heroSocial}>

          <SocialMediaIcon href={'https://www.linkedin.com/in/albertolopezbastos/'} xlinkHref="img/sprites.svg#icon-linkedin-with-circle"/>
          
          <SocialMediaIcon href={'https://github.com/AlbertoLopezBastos'} xlinkHref="img/sprites.svg#icon-github"/>

        </aside>
      </main>
    </section>
  )
};

export default Home;
