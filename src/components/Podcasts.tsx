import { podcast } from '../data';
import { Navbar } from './Navbar';
import { Podcast} from './Podcast';

export function Podcasts(){
    const postsDivs = podcast.map((post) => <Podcast post={post} />);
    return (
        <div>
           <Navbar/>
			{postsDivs}
        </div>

    );
}