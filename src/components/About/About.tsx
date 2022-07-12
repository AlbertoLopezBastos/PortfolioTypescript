import s from  './About.module.css';
import Card from '../ui/Card';
import Images from '../Images';

const title = 'About me';
const text =  "Learning and loving web development since 2012. I've worked with excellent colleagues and was lucky enough to eventually lead a wonderful, professional team. Always looking for new challenges!";

const About = () => {
  return (
    <section id="about" className={s.about}>
      <div className={s.title}>{title}</div>

      <div className={s.container}>
        <p className={s.text}>{text}</p>

        <div className={s.cardsGrid}>
          <Card 
            title='Front-end Developer' 
            subtitle="I like to code things from designs, and enjoy bringing ideas to life in the browser." 
            titleBack='Front-End' 
            subtitleBack='Languages:' 
            list={['HTML','CSS','Sass','Javascript','React','Redux']}
            footerTitle='Dev Tools:' 
            footerContent='VsCode, Chrome DevTools, Git, NPM, Terminal' 
            pic={Images.front}           
          />

          <Card 
            title='Back-End Developer' 
            subtitle="I'm curious in learning about backend too!" 
            titleBack='Back-End' 
            subtitleBack='Languages:' 
            list={['Node','Express','MongoDb','GraphQL','SQL','Redux']}
            footerTitle='Dev Tools:' 
            footerContent='Postman, Mongodb Atlas, Firebase, SQL Server'  
            pic={Images.back}               
          />

          <Card 
            title='Testing' 
            subtitle="Always important!" 
            titleBack='Testing' 
            subtitleBack='Tools I use:' 
            list={['Jest','Enzyme']}
            pic={Images.test}     
          />        
        </div>
      </div>
    </section>
  )
}

export default About;
