
import s from './Nav.module.css';

const Nav = () => {
  return (
	<nav className={s.navbar}>
		<a className={s.navbarBtn} id="projects-btn" href="#projects">Portfolio</a>

		<a className={s.navbarBtn} id="contact-btn" href="#contact">Contact</a>
  	</nav>
  )
};

export default Nav;
