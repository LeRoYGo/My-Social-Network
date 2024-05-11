import s from './HashtagsForYou.module.css';

function HashtagsForYou() {
	return (
		<div className={`sidebar ${s.hashtag__list}`}>
			<h3 className={`${s.hashtag} ${s.title}`}>Hashtags for you</h3>
			<div className={s.hashtag}>
				<a href="#!">#frontend</a>
				<span>1,222 Teams</span>
			</div>
			<div className={s.hashtag}>
				<a href="#!">#frontend</a>
				<span>1,222 Teams</span>
			</div>
			<div className={s.hashtag}>
				<a href="#!">#frontend</a>
				<span>1,222 Teams</span>
			</div>
			<div className={s.hashtag}>
				<a href="#!">#frontend</a>
				<span>1,222 Teams</span>
			</div>
			<div className={s.hashtag}>
				<a href="#!">#frontend</a>
				<span>1,222 Teams</span>
			</div>
		</div>
	);
}

export default HashtagsForYou;
