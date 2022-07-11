
import s from './SocialMediaIcon.module.css';

export interface ISocialMediaIconProps {
	href: string;
	xlinkHref: string;
};

const SocialMediaIcon = (props:ISocialMediaIconProps) => {
  return (
	<a href={props.href} target="blank">        
		<svg className={s.icon}>          
		<use xlinkHref={props.xlinkHref}></use>
		</svg>
  	</a>
  )
}

export default SocialMediaIcon;
