
import { ReactNode } from 'react';
import s from './Section.module.css';

export interface ISectionProps {
  id: string;
  children: ReactNode;
	bgColor: 'dark' | 'light';
};

const Section = (props: ISectionProps) => {
  return (
    <section id={props.id} className={props.bgColor === 'dark' ? s.bgDark : s.bgLight}>
      {props.children}
    </section>
  )
}

export default Section;
