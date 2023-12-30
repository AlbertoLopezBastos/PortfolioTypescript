import s from './Project.module.css';

export interface IProjectProps {
	img: string;
	name: string;
	website: string;
	github: string;
};

const Project = (props : IProjectProps) => {
  return (
    <div className={s.project}>
      <figure className={s.figure}>
        <img className={s.img} src={props.img} alt="project thumbnail"/>
        <figcaption>
          <h3 className={s.title}>{props.name}</h3>
          <a className={s.web} href={props.website} target="_blank" rel="noreferrer">Visit Website</a>
          <a className={s.github} href={props.github} target="_blank" rel="noreferrer">Visit Github</a>
        </figcaption>
      </figure>
      <a className={s.web2} href={props.website} target="_blank" rel="noreferrer">Website</a>
      <a className={s.github2} href={props.github} target="_blank" rel="noreferrer">Github</a>
    </div>
  );
};

export default Project;
