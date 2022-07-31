/* eslint-disable jsx-a11y/anchor-is-valid */

import { AiOutlineHeart} from 'react-icons/ai';
import { IPost } from '../data';

interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps) {
	return (
		 

		 <article className="article-box">
	
			<img src={post.imageUrl}  className="image" alt='jj' />
			
			
			<h2 className="title"><a href="#"><span>{post.title}</span></a></h2>
			<hr className="divider" />
			<div className="meta-cont">
				<div className="category-cont">
					<a href="#">{post.tags}</a>
			
				</div>
				<a href="#"> <i>by  {post.username} on  {post.date}</i> </a><br /><br />
				<a  href="#about"> < AiOutlineHeart  size={15} />  {post.likeCount}reactions</a> 
				
			</div>
		</article>
		
		
			



	);
}


