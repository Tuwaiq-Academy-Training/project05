import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';




export function Post() {
	return (
		<div>
			<div className='create-post'>
				<div>
				<button className='add-cover'>Add cover image</button>
				</div>
				<div>
					<input type="text" placeholder='New post title here...' />
				</div>
				<div>
					<p className='p-create-post'>add up to 4 tags</p>
				</div>
				<div className='markdown'>

				</div>
				<div>
					<input className='write-create-post' type="text" />
				</div>
			</div>
			<button className='publish-button'>Publish</button>
		</div>
	);
}
