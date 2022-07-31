import { podcasts } from '../data/podcast';
import { Podcast } from './Podcast';
export function Podcasts() {
	const podcastsDivs = podcasts.map((podcast) => <Podcast podcast={podcast} />);

	return (
		<div className='podcasts' id=''>
			{podcastsDivs}
		</div>
	);
}
