import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

import HomeIcon from '/icon/home.svg';
import PeopleIcon from '/icon/people.svg';
import LetterIcon from '/icon/letter.svg';
import PersonIcon from '/icon/person.svg';

function NavBar(props) {
	return (
		<nav className={`${s.navBar} ${props.style}`}>
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
		</nav>
	);
}

export default NavBar;
