import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import Button from '../Button/Button';

import HomeIcon from '/icon/home.svg';
import PeopleIcon from '/icon/people.svg';
import LetterIcon from '/icon/letter.svg';
import PersonIcon from '/icon/person.svg';
import Logo from '/logo.svg';

function NavBar() {
	//person
	return (
		<div className={`navBar ${s.navBar}`}>
			<div className={s.logo_company}>
				<img src={Logo} alt="logo" />
				<span>teamder</span>
			</div>

			<NavLink to="/" className={s.navBar_item}>
				<img src={HomeIcon} alt="home" />
				Home
			</NavLink>
			<NavLink to="/my-teams" className={s.navBar_item}>
				<img src={PeopleIcon} alt="people icon" />
				My teams
			</NavLink>
			<NavLink to="/notifications" className={s.navBar_item}>
				<img src={LetterIcon} alt="people icon" />
				Notifications
			</NavLink>
			<NavLink to="/my-profile" className={s.navBar_item}>
				<img src={PersonIcon} alt="people icon" />
				Profile
			</NavLink>
			<Button style={s.navBar_item} text={'CREATE A TEAM'} />
			<Button text={'LOG OUT'} />
		</div>
	);
}

export default NavBar;
