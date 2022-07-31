import { Link } from "react-router-dom";
import SideList from "../../components/SideList/SideList";
import "./Home.css";
import ad from "../../images/homeAsidePic.jpg";
import Feed from "../../components/Feed/Feed";
import { useAppSelector } from "../../app/hooks";

const Home = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="home">
      <div className="home__left">
        <div className="home__about">
          <h3>
            <span>DEV Community</span> is a community of 883,369 amazing
            developers
          </h3>
          <p>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          {!user && (
            <Link to="/login" className="home__login">
              Log in
            </Link>
          )}
        </div>
        <SideList />
      </div>
      <div className="home__feed">
        <Feed />
      </div>
      <div className="home__right">
        <div className="home__right-ad">
          <img src={ad} alt="ad" />
          <h2>Forem Android App is Here</h2>
        </div>
        <div className="home__right-listngs">
          <h3>Listings</h3>
          <div className="home__listngsItem">
            <p>Technical writer available for hire forhire</p>
          </div>
          <div className="home__listngsItem">
            <p>🆘 Help Needed for Low-code Framework for Node.js</p>
          </div>
          <div className="home__listngsItem">
            <p>
              🚨🚨🚨 tsParticles is looking for contributors, any kind of
              JavaScript/TypeScript experience is welcome ⭐️⭐️⭐️
            </p>
          </div>
          <div className="home__listngsItem">
            <p>Wanted: Technical writers (NLP, IR, AI, Marketing, SEM)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
