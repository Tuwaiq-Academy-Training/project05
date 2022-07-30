import { IPost } from '../../data/DataPost';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

interface PostProps {
	post: IPost;
}
export  function Post({ post }: PostProps) {
	return (
		
		<div className='post'>
			<img className='post-img' src={post.imageUrl} alt="" />
			<div className='post-content'>
				<div className='user-avatar'>
				<img className='git' src={post.userAvatarUrl} alt="" />
					<p>{post.username}</p>
				</div>
				<div className='title'>
					<h1>{post.title}</h1>
				<a href="#">{post.tags}</a>
				</div>
				
				<div className='comment-reaction'>
					<div className='reaction'>
						<AiOutlineHeart />
						<span>11</span>
						<span>Reaction</span>
					</div>
					<div className='comment'>
						<FaRegComment />
						<span>1</span>
						<span>Comment</span>
					</div>
				</div>
			</div>
		</div>
	
		
	);
}
