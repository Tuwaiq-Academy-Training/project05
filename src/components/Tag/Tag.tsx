import "./Tag.css";

interface Props {
  title: string;
  desc: string;
  color: string;
}

const Tag = ({ title, desc, color }: Props) => {
  return (
    <div className="tag">
      <span className="tag__line" style={{ backgroundColor: color }} />
      <div className="tag__content">
        <h3>
          <span style={{ color: color }}>#</span>
          {title}
        </h3>
        <p>{desc}</p>
        <div className="tag__btn">Follow</div>
      </div>
    </div>
  );
};

export default Tag;
