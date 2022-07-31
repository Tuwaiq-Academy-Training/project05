import { posts } from '../data/data';
import { Post } from './Post';
import '../style/post.css'
export function Posts() {
	const postsDivs = posts.map((post) => <Post post={post} />);

	return (
		<div className='posts' id=''>
			{postsDivs}
		</div>
	);
}
