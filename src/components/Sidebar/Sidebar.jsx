import SearchBar from '../SearchBar/SearchBar';
import HashtagsForYou from '../HashtagsForYou/HashtagsForYou';

function Sidebar() {
	return (
		<div className="sidebar">
			<SearchBar />
			<HashtagsForYou />
		</div>
	);
}

export default Sidebar;
