import s from './HashtagsForYou.module.css';

function HashtagsForYou() {
	return (
		<div className={s.hashtag__list}>
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
			<div className={s.hashtag}>
				<a className={s.btn_Show_More} href="#!">
					Show more
				</a>
			</div>
		</div>
	);
}

export default HashtagsForYou;
