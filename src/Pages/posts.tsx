import { posts } from '../data/data';
import { NavbarPage } from '../componets/Navbar';
import { Post } from '../componets/Post';

export function Posts() {
    const postsDivs = posts.map((post) => <Post post={post} />);

    return (
        <>
        <div className='posts' id=''>
            {postsDivs}
        </div>
        </>
    );
}