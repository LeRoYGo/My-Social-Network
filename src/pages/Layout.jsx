import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Sidebar from '../components/Sidebar/Sidebar';

function Layout() {
	return (
		<div className="layout">
			<Menu />
			<Outlet />
			<Sidebar />
		</div>
	);
}

export default Layout;
