import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from "react-icons/fi";
import { IPost } from '../data/data';




interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps) {
	return (
		<div className='post'>
			<div className='header'>
				<div className='spacer'></div>

			</div>
			<img src={post.imageUrl} alt='' />
			<div className='footer'>
			<h4>{post.username}</h4>
			<img src={post.userAvatarUrl} alt='' />
			<h2 className='description'>{post.description}</h2>
			<input className="botton" type="button" value="save" />


				<div className='icons'>
					<FiHeart className='icon heart' size={30} />
					<FiMessageCircle className='icon' size={30} />
				</div>
				
			</div>
		</div>
	);
}
