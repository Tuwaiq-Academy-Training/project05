import { AiOutlineHeart} from 'react-icons/ai';
import { IPost } from '../data';

interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps) {
	return (
		 

		 <article className="article-box">
	
			<img src={post.imageUrl}  className="image" alt='jj' />
			
			
			<h2 className="title"><a href="#Post"><span>{post.title}</span></a></h2>
			<hr className="divider" />
			<div className="meta-cont">
				<div className="category-tags">
					<a href="#Post">{post.tags}</a>
			
				</div>
				<a href="#Post"> <i>by  {post.username} on  {post.date}</i> </a><br /><br />
				<a  href="#about"> < AiOutlineHeart  size={15} />  {post.likeCount}reactions</a> 
				
			</div>
		</article>
		
	

	);
}