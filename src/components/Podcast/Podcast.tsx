import "./Podcast.css";

interface Props {
  img: string;
  text: string;
}

const Podcasts = ({ img, text }: Props) => {
  return (
    <div className="Podcasts__box">
      <img src={img} alt="podTop" />
      <div className="Podcasts__boxText">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Podcasts;
