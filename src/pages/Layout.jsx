import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import NavBar from '../components/NavBar/NavBar';

function Layout() {
	return (
		<div className="layout">
			<NavBar />
			<Outlet />
			<Sidebar />
		</div>
	);
}

export default Layout;
