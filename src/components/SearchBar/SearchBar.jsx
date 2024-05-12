import s from './SearchBar.module.css';

function SearchBar() {
	return (
		<div className={`${s.searchBar} ${s.margin}`}>
			<input type="search" name="mySearch" id="mySearch" placeholder="Search Teamder" />
		</div>
	);
}

export default SearchBar;
