import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { NavbarPage } from '../componets/Navbar';
import { IPodcast } from '../data/PodcastData';

interface PodcastProps {
    podcast: IPodcast;
}

export function Podcast({ podcast }: PodcastProps) {
    return (
        <>
            <div className='card-pdcastcontain' >

                <div className='img-prag' >
                    <img className="podcast-img" src={podcast.imageUrl} alt='' />
                    <div className='card-pod-info'>
                        <p>{podcast.description}</p>

                        <p className='p-p-light'>{podcast.tagfFooter}</p>

                    </div>


                </div>
            </div>



        </>
    );
}