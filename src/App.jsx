import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyProfile from './pages/MyProfilePage';
import Layout from './pages/Layout';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="my-profile" element={<MyProfile />} />
			</Route>
		</Routes>
	);
}

export default App;
