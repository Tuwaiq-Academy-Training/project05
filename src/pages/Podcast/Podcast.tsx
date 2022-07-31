import "./Podcast.css";
import PodBox from "../../components/PodBox/PodBox";
import podTop1 from "../../images/pod-top-1.jpg";
import podTop2 from "../../images/pod-top-2.jpg";
import podTop3 from "../../images/pod-top-3.jpg";
import podTop4 from "../../images/pod-top-4.jpg";
import podTop5 from "../../images/pod-top-5.jpg";
import podBot1 from "../../images/pod-bot-1.jpg";
import podBot2 from "../../images/pod-bot-2.jpg";
import podBot3 from "../../images/pod-bot-3.jpg";

const Podcast = () => {
  return (
    <div className="podcast">
      <h1 className="podcast__title">Podcasts</h1>

      <div className="podcast__top">
        <h2>Latest episodes</h2>
        <div className="podcast__top-container">
          <PodBox
            img={podTop1}
            txt="The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu"
          />
          <PodBox img={podTop2} txt="#375: Python Language Summit 2022" />
          <PodBox img={podTop3} txt="Our Summer Break - 2022" />
          <PodBox img={podTop4} txt="S6 Bonus: Andre Ferraz, Incognia" />
          <PodBox
            img={podTop5}
            txt="More than a Cache: Turning Redis into a Composable, ML Data Platform // Samuel Partee // Coffee Sessions"
          />
        </div>
      </div>

      <div className="podcast__bot">
        <h2>Featured shows</h2>
        <div className="podcast__bot-container">
          <div className="podcast__bot-box">
            <img src={podBot1} alt="" />
            <h3>CodeNewbie</h3>
          </div>
          <div className="podcast__bot-box">
            <img src={podBot2} alt="" />
            <h3>CodeNewbie</h3>
          </div>
          <div className="podcast__bot-box">
            <img src={podBot3} alt="" />
            <h3>CodeNewbie</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
