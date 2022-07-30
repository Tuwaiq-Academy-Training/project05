
import { NavbarPage } from '../componets/Navbar';
import { podcasts } from '../data/PodcastData';
import { Podcast } from '../componets/Podcasts';


export function Podcasts() {
    const podcastDivs = podcasts.map((podcast) => <Podcast podcast={podcast} />);

    return (
        <>
            <NavbarPage />
            <div className='conainer-podcast'>
                <div className='podcast-head'>
                    <h1> Podcasts</h1>
                    <p>Suggest Podcast</p>
                </div>
                <div className='podcast-card'>
                    {podcastDivs}
                </div>
            </div>

        </>
    );
}