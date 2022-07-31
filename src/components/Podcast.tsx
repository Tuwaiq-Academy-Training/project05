import { IPodcast } from "../data";

interface PodacstProps {
	podcast: IPodcast;
}

export function Podcast({ podcast }: PodacstProps){
    return<>
     <div className="podcast">
     <img src= {podcast.imageUrl} alt="podcast" className="podcast-img"/>
     
     <div className="podcast-info">
     <h5>{podcast.description}</h5>
     <p>{podcast.date}</p>
    </div>
     </div>
    
    </>
}