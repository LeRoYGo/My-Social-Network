import s from './Button.module.css';

function Button(props) {
	const style = props.position ? `${s.button} ${props.position}` : `${s.button}`;

	return <button className={style}>{props.text}</button>;
}

export default Button;
