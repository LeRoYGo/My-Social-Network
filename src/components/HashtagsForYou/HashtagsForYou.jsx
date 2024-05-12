import s from './HashtagsForYou.module.css';

//<div className={}>
<a className={s.btn_Show_More} href="#!">
	Show more
</a>;
//			</div>

function HashtagsForYou() {
	const listHashtag = [
		{ id: 1, hashtag: '#frontend', text: '1,222 Teams' },
		{ id: 2, hashtag: '#fweff', text: 'Lorem ipsum is simply dummy text of the prntingand typesetting industry.' }
	];

	return (
		<div className={s.hashtagList}>
			<h3 className={`${s.title} ${s.title}`}>Hashtags for you</h3>
			{listHashtag.map((item) => {
				return (
					<div className={s.hashtagItem} key={item.id}>
						<a href="#!">{item.hashtag}</a>
						<span>{item.text}</span>
					</div>
				);
			})}
			<div className={`${s.hashtagItem} ${s.btn}`}>
				<a href="#!">Show more</a>
			</div>
		</div>
	);
}

export default HashtagsForYou;
