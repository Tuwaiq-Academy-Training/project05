import { videos } from '../data';
import { Video } from './Video';

export function Videos(){
    const videoDiv = videos.map((video) => <Video video={video} />);
   return <>
   <h1>DEV Community on Video</h1>
   <div className='grid'>
           {videoDiv}
       </div></>
}