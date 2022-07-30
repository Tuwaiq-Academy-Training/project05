import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { NavbarPage } from '../componets/Navbar';
import { IPodcast } from '../data/PodcastData';

interface PodcastProps {
    podcast: IPodcast;
}

export function Podcast({ podcast }: PodcastProps) {
    return (
        <>

            <div>
                <img className="podcast-img" src={podcast.imageUrl} alt='' />
                <div >
                    <p>{podcast.description}</p>
                </div>
                <div>
                    <p>{podcast.tagfFooter}</p>
                </div>

            </div>



        </>
    );
}