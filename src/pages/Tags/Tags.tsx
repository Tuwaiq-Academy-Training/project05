import "./Tags.css";
import Tag from "../../components/Tag/Tag";

const Tags = () => {
  return (
    <div className="tags">
      <h1>Top tags</h1>
      <div className="tags__container">
        <Tag
          title="javascript"
          desc="Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code"
          color="#f7df1e"
        />
        <Tag title="webdev" desc="Because the internet..." color="#562765" />
        <Tag
          title="beginners"
          desc="A journey of a thousand miles begins with a single step. -Chinese Proverb"
          color="#008335"
        />
        <Tag
          title="programming"
          desc="The magic behind computers. 💻 🪄"
          color="#890606"
        />
        <Tag
          title="tutorial"
          desc="Tutorial is a general purpose tag. We welcome all types of tutorial - code related or not! It's all about learning"
          color="#FEFFA5"
        />
        <Tag
          title="react"
          desc="Official tag for Facebook's React JavaScript library for building user interfaces"
          color="#222222"
        />
        <Tag
          title="productivity"
          desc="Productivity includes tips on how to use tools and software, process optimization, useful references"
          color="#2A0798"
        />
        <Tag
          title="html"
          desc="Hypertext Markup Language — the standard markup language for documents designed to be displayed"
          color="#F53900"
        />
        <Tag
          title="php"
          desc="Home for all the PHP-related posts on Dev.to!"
          color="#23A1AA"
        />
      </div>
    </div>
  );
};

export default Tags;
