import "./Podcast.css";
import Podcasts from "../../components/Podcast/Podcast";
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import img4 from "../../images/img-4.jpg";
import img5 from "../../images/img-5.jpg";
import img6 from "../../images/img-6.jpg";
import img7 from "../../images/img-7.jpg";
import img8 from "../../images/img-8.jpg";

export function Podcast(){
  return (
    <div className="podcast">
      <h1 className="podcast__title">Podcasts</h1>

      <div className="podcast__top">
        <h2>Latest episodes</h2>
        <div className="podcast__top-container">
          <Podcasts
            img={img1}
            text="The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu"
          />
          <Podcasts img={img2} text="#375: Python Language Summit 2022" />
          <Podcasts img={img3} text="Our Summer Break - 2022" />
          <Podcasts img={img4} text="S6 Bonus: Andre Ferraz, Incognia" />
          <Podcasts
            img={img5}
            text="More than a Cache: Turning Redis into a Composable, ML Data Platform // Samuel Partee // Coffee Sessions"
          />
        </div>
      </div>

      <div className="podcast__bot">
        <h2>Featured shows</h2>
        <div className="podcast__bot-container">
          <div className="podcast__bot-box">
            <img src={img6} alt="" />
            <h3>CodeNewbie</h3>
          </div>
          <div className="podcast__bot-box">
            <img src={img7} alt="" />
            <h3>CodeNewbie</h3>
          </div>
          <div className="podcast__bot-box">
            <img src={img8} alt="" />
            <h3>CodeNewbie</h3>
          </div>
        </div>
      </div>
    </div>
  );
};


