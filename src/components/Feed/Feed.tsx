import { useAppSelector } from "../../app/hooks";
import Post from "../Post/Post";
import "./Feed.css";

const Feed = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
