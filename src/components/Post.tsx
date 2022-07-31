import { Ipost } from "../data";
import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
interface postdev{
    post:Ipost
} 
export function Post({ post }: postdev) {
	return (
		<div className='post'>
	<p className='description'>{post.titles}</p>
	
			<div className='footer'>
				<div className='icons'>
				<p className='description'>{post.description}</p>
			
				</div>
			</div>
			<div className='header'>
				<img src={post.userAvatarUrl} alt='' className="imgav" />
				<h2>{post.username}</h2>
				<div className='spacer'></div>
				
			</div>
		</div>
	);
}
