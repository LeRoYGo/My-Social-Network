import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';
import s from './Menu.module.css';

function Menu() {
	return (
		<div className={s.menu}>
			<Logo style={s.logo} />
			<NavBar style={s.nav} />
			<Button text={'CREATE A TEAM'} />
			<Button text={'LOG OUT'} position={s.buttonPosition} />
		</div>
	);
}

export default Menu;
