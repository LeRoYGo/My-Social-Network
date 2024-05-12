import s from './Logo.module.css';
import Logo from '/logo.svg';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
	return (
		<NavLink to="/" className={`${s.logo} ${props.style}`}>
			<img src={Logo} alt="logo" />
			<span className={s.logo__title}>teamder</span>
		</NavLink>
	);
}

export default NavBar;
