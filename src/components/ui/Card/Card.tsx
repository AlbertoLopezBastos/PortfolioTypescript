import s from './Card.module.css';

export interface ICardProps {
	title: string;
	subtitle: string;
	titleBack: string;
	subtitleBack: string;
	list: string[];
	footerTitle?: string;
	footerContent?: string;
	pic: string;
};

const Card = (props : ICardProps) => {
  return (
	<div className={s.card}>
		<div className={`${s.cardSide} ${s.cardSideFront}`}>	
			<figure>
				<img src={props.pic} alt="img" />
			</figure>

			<h4>{props.title}</h4>

			<p>{props.subtitle}</p>
		</div>

		<div className={`${s.cardSide} ${s.cardSideBack}`}>
			<h3>{props.titleBack}</h3>

			<h4>{props.subtitleBack}</h4>
			
			<ul>{props.list.map((item,id) => <li key={id}>{item}</li>)}</ul>

			{props.footerTitle &&
				<div>
					<h4>{props.footerTitle}</h4>

					<p>{props.footerContent}</p>
				</div>		
			}
		</div>
  	</div>
  );
};

export default Card;
