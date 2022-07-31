import { posts } from '../data';
import { Article } from './Article';

export function Articles(){
    const postsDivs = posts.map((post) => <Article post={post} />);
    return (
        <div className='posts' id=''>
			{postsDivs}
		</div>
    );
}