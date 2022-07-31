import "./Post.css";
import "../Avatar/Avatar.css";
import { Post as IPost } from "../../routes/NewPost/NewPost";

import{RiChat1Line,RiHeart2Line}from "react-icons/ri"

import { Link } from "react-router-dom";


interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <div className="post__name">
        <div className="flx-post"> 
   <img className="my-avatar" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
        <h4>{post.author}</h4>
       
        </div>
      
      </div>
      <div className="post__title">
        <h1>{post.title}</h1>
      </div>
      <div className="singlePage__tags">
          <p>#typescript</p>
          <p>#javascript</p>
          <p>#programming</p>
          <p>#tutorial</p>
        </div>
        <br />
      <div className="post-footer">   <div className="post__icons">
        <div className="post__iconsItem">
        
          <RiHeart2Line />
            {post.likes} Reactions
        </div>
        <div className="post__iconsItem">
          
          <RiChat1Line />
          {post.comments} Comments
        </div>
      </div>
    <div className="save-date">
       <span>4 min read</span>
      <span id="save">save</span>



     
    </div>
      </div>
   
    </Link>
  );
};

export default Post;
