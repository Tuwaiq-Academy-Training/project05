import "./PodBox.css";

interface Props {
  img: string;
  txt: string;
}

const PodBox = ({ img, txt }: Props) => {
  return (
    <div className="podBox__box">
      <img src={img} alt="podTop" />
      <div className="podBox__boxText">
        <p>{txt}</p>
      </div>
    </div>
  );
};

export default PodBox;
