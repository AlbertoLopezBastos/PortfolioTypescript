
import s from './Nav.module.css';
import { useTheme, Theme } from '../../ThemeContext';
import Switch from "react-switch";
import { useState } from 'react';
import {Sun, Moon} from '../../icons';

const Nav = () => {

  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setTheme(theme === 'Dark' ? Theme.Light : Theme.Dark);
  }

  return (
	<nav className={s.navbar}>
		<div>
			<label  className={s.switch} >
        <Switch offColor="#333" onColor='#ccc' onHandleColor="#555" width={58}    checkedIcon={<Moon/>} uncheckedIcon={<Sun/>} checked={checked} onChange={handleChange}/>
      </label>
		</div>
		<div>
			<a className={s.navbarBtn} id="resume-btn" href="./AlbertoLopezBastos.pdf" target="_blank" rel="noopener noreferrer" title="resume">Resume</a>
		</div>

  	</nav>
  )
};

export default Nav;
