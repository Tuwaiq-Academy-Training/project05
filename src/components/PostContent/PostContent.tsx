import { useAppSelector } from "../../app/hooks";
import Post from "../Post/Post";
import "./PostContent.css";

const PostContent = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <div className="PostContent">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostContent;
