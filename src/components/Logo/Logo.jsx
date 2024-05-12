import s from './Logo.module.css';
import Logo from '/logo.svg';

function NavBar(props) {
	return (
		<a href="/" className={`${s.logo} ${props.style}`}>
			<img src={Logo} alt="logo" />
			<span className={s.logo__title}>teamder</span>
		</a>
	);
}

export default NavBar;
