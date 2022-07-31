import { IPost } from "../data";
import { RiChat1Line, RiHeart2Line} from 'react-icons/ri';

interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps){
return <>
<div className="post">
 <img className="post-image" src={post.imageUrl} alt="post" />  

<div className="post-info">
<div className="user-info">
 <img className="user-avatar" src= {post.userAvatarUrl} alt="user avatar" />   
 <div>
  <h4>{post.username}</h4>
  <p>{post.createDate}</p>
 </div>
 </div>

 <h2>{post.title}</h2>
 <p>{post.tags}</p>

 <div className="post-footer">
    <div className="interaction">
        <div className="count"><RiHeart2Line /> {post.reactionCount} Reactions</div>
        <div className="count"><RiChat1Line /> {post.commentsCount} Comments</div>
    </div>
    <div className="save-post">
      <p>{post.readTime} min read</p>
      <div className="save-btn">Save</div>
    </div>
 </div>
</div>

</div>
</>
}