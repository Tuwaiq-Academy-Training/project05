import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import "./SinglePost.css";

const SinglePost = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const { id } = useParams();
  const post = posts.find((i) => i.id === Number(id));
  console.log(post);

  if (!post) {
    return (
      <div className="singlePage__page404">
        <h1>Sorry post not found</h1>
      </div>
    );
  }

  return (
    <div className="singlePage">
      <div className="singlePage__left">
        <div className="singlePage__name">
          <h4>{post.author}</h4>
          {/* <p>{post.id}</p> */}
        </div>
        <div className="singlePage__title">
          <h1>{post.title}</h1>
        </div>
        <div className="singlePage__description">
          <p>{post.description}</p>
        </div>
        <div className="singlePage__tags">
          <p>#typescript</p>
          <p>#javascript</p>
          <p>#programming</p>
          <p>#tutorial</p>
        </div>
      </div>
      <div className="singlePage__right">
        <div className="singlePage__right-user">
          <div>
            <p>Author: </p>
            <span>{post.author.substring(0, 10)}...</span>
          </div>
          <button>Follow</button>
          <div>
            <p>Work: </p>
            <span>DevOps</span>
          </div>
        </div>
        <div className="singlePage__right-trending">
          <h2>
            Trending on <span>DEV Community</span> 🚨
          </h2>
          <div className="home__listngsItem">
            <p>
              Ivan profile image Infrastructure from code - not 'as', but 'from'
            </p>
          </div>
          <div className="home__listngsItem">
            <p>
              Benjy Weinberger profile image Better CI/CD caching with new-gen
              build systems ⭐️⭐️
            </p>
          </div>
          <div className="home__listngsItem">
            <p>
              🚨 tsParticles is looking for contributors, any kind of
              JavaScript/TypeScript experience is welcome
            </p>
          </div>
          <div className="home__listngsItem">
            <p>
              🆘 Keff profile image How do you estimate/calculate costs of new
              features for clients?
            </p>
          </div>
          <div className="home__listngsItem">
            <p>mage Better CI/CD caching with new-gen build systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
