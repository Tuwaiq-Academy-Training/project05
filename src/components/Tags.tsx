import { Link } from 'react-router-dom';
import { FaBeer,  } from 'react-icons/fa';
import { FiCompass, FiHeart, FiMoreHorizontal, FiSettings, FiUser } from 'react-icons/fi';


export function Tags() {
	return (
        <div>
        <div className="content-cards">
    <div className="card">
      <div className="head">
        <h2 className="title">#javascript</h2>
      </div>
      <div className="body">
      <p className="subtitle">Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code.</p>
        <button className='cards-btn'>Follow</button>
      </div>
    </div>
    <div className="card">
      <div className="head">
        <h2 className="title">#webdev</h2>
      </div>
      <div className="body">
      <p className="subtitle">Because the internet...</p>
        <button className='cards-btn'>Follow</button>
      </div>
    </div>
    <div className="card">
      <div className="head">
        <h2 className="title">#beginners</h2>
      </div>
      <div className="body">
      <p className="subtitle">"A journey of a thousand miles begins with a single step." -Chinese Proverb</p>
        <button className='cards-btn'>Follow</button>
      </div>
    </div>
    <div className="card">
      <div className="head">
        <h2 className="title">#programming</h2>
      </div>
      <div className="body">
      <p className="subtitle">The magic behind computers. 💻 🪄</p>
        <button className='cards-btn'>Follow</button>
      </div>
    </div>
    <div className="card">
      <div className="head">
        <h2 className="title">#tutorial</h2>
      </div>
      <div className="body">
      <p className="subtitle">Tutorial is a general purpose tag. We welcome all types of tutorial - code related or not! It's all about learning, and using tutorials to teach</p>
        <button className='cards-btn'>Follow</button>
      </div>
    </div>
    <div className="card">
      <div className="head">
        <h2 className="title">#react</h2>
      </div>
      <div className="body">
      <p className="subtitle">Official tag for Facebook's React JavaScript library for building user interfaces</p>
        <button className='cards-btn'>Follow</button>
      </div>
    </div>
    
  </div>
        </div>
        
		
	);
}
