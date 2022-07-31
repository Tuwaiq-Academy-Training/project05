import { IVide } from "../data";

interface VideoProps {
	video: IVide;
}

export function Video({ video }: VideoProps){
    return<>
     <div className="video">
     <img src= {video.imageUrl} alt="video" className="video-img"/>
     
     <div className="video-info">
     <h5>{video.title}</h5>
     <p>{video.userName}</p>
    </div>
     </div>
    
    </>
}