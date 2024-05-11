import HashtagsForYou from '../HashtagsForYou/HashtagsForYou';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="search-bar">
				<input type="search" name="mySearch" id="mySearch" placeholder="Search Teamder" />
			</div>
			<HashtagsForYou />
		</div>
	);
}

export default Sidebar;
