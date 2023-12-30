import s from './Button.module.css';

export interface IButtonProps {
	title: string;
	href: string;
};

const Button = (props : IButtonProps) => {
  return (
	<div className={s.btn}>
		<a href={props.href}>{props.title}</a>
	</div>
  )
}

export default Button;
