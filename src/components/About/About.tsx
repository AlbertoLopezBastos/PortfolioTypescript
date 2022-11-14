import s from  './About.module.css';
import Images from '../Images';

const About = () => {
  return (
    <section id="about" className={s.about} >

      <div className={s.container}>
        <p className={s.text}>Front End <span className='textGradient'>Developer</span> since 2012. Always looking for new <span className='textGradient'>challenges!</span></p>

        <div className={s.logosGrid}>
          <img className={s.logo} src={Images.html} alt="html logo"/>
          <img className={s.logo} src={Images.css} alt="css logo"/>
          <img className={s.logo} src={Images.javascript} alt="javascript logo"/>
          <img className={s.logo} id='reactLogo' src={Images.react} alt="react logo"/>
          <img className={s.logo} id='nextLogo' src={Images.next} alt="next logo"/>
          <img className={s.logo} id='nodeLogo' src={Images.node} alt="node logo"/>
        </div>
      </div>
    </section>
  )
}

export default About;
