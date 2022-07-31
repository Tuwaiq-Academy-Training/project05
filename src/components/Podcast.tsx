import { IPodcast } from '../data/podcast';

interface PodcastProps {
	podcast: IPodcast;
}

export function Podcast({ podcast }: PodcastProps) {
	return (
		<div>
<div className="card">

			<img src={podcast.imageUrl} alt='' />
			<div className="container">
    <h2><b>{podcast.description}</b></h2>
  </div>
		</div>
		</div>
		
	);
}
