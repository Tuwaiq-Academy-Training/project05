
import { Sidemenu } from "../../components/SideMenu/Side-menu";
import "./Home.css";

import PostContent from "../../components/PostContent/PostContent";


export function Home() {


  return (
    <div className="home">
      <div className="home__left">
   
        <Sidemenu />
      </div>
      <div className="home__PostContent">
        <PostContent />
      </div>
      <div className="home__right">
 
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


