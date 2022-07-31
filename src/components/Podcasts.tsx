import { podcasts } from '../data';
import { Podcast } from './Podcast';

export function Podcasts(){
    const podcastDiv = podcasts.map((podcast) => <Podcast podcast={podcast} />);
   return <><div className="podcast-title">
       <h1>Podcasts</h1>
       <div className="Suggest-Podcast">Suggest a Podcast</div>
   </div><h2>Latest episodes</h2>
   <div className='grid'>
           {podcastDiv}
       </div></>
}