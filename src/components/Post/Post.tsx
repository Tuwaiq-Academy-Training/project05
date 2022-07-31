import "./Post.css";
import { Post as IPost } from "../../types/types";
import { BsChat, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <div className="post__name">
        <h4>{post.author}</h4>
        <p>{post.id}</p>
      </div>
      <div className="post__title">
        <h1>{post.title}</h1>
      </div>
      <div className="post__icons">
        <div className="post__iconsItem">
          {post.likes}
          <BsHeart />
        </div>
        <div className="post__iconsItem">
          {post.comments}
          <BsChat />
        </div>
      </div>
    </Link>
  );
};

export default Post;
