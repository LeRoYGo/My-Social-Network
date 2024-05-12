import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import MyTeamsPage from './pages/MyTeamsPage';
import NotificationsPage from './pages/NotificationsPage';
import MyProfile from './pages/MyProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="my-teams" element={<MyTeamsPage />} />
				<Route path="notifications" element={<NotificationsPage />} />
				<Route path="my-profile" element={<MyProfile />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
