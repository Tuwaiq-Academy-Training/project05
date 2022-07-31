import { IPodcast } from '../data';

interface PostProps {
	post: IPodcast;
}
export function Podcast({ post }: PostProps){
    return(
        <>
        <div className="header-card">
           <h1>Podcast</h1>
            <h3>Latest episodes</h3>
        </div>
        <div className='cards'>
             <div  className='card'>
               <img src={post.imageUrl} alt=''/>
                {post.title}
                {post.paragraph}
                {post.author}
             </div>
        </div>
            
    </>
    );
}

