import s from './Footer.module.css';

export interface IFooterProps {
	content: string;
};

const Footer = (props: IFooterProps) => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>{props.content}</p>
    </footer>
  )
};

export default Footer;
