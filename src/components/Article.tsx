import { FiHeart, FiMessageCircle, FiMoreHorizontal } from 'react-icons/fi';
import { IPost } from '../data';

interface PostProps {
	post: IPost;
}

export function Article({ post }: PostProps){
 return(
   <div className='post'>
   <img src={post.imageUrl} alt='' />
   <div className='header'>
      <img src={post.userAvatarUrl} alt='' />
      <h2>{post.username}</h2>
      <div className='spacer'></div>
   </div>
   <div className='footer'>
   <p className='description'>{post.description}</p>
      <div className='icons'>
         <FiHeart className='icon heart' size={35} /><p  className='description'> 2 reactions</p>
         <FiMessageCircle className='icon' size={35} /><p className='description'>Add Comment</p>
         <div className='spacer'></div>
         <p className='description'>3 min read</p>
         <button>Save</button>
      </div>
   </div>
</div>
 );
}