import s from './Button.module.css';

function Button({ style, text }) {
	return <button className={`${s.button} ${style}`}>{text}</button>;
}

export default Button;
