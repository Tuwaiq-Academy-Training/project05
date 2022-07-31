import { tags } from '../data';
import { Tag } from './Tag';

export function Tags(){
    const tagsDev = tags.map((tag) => <Tag tag={tag} />);
   return <>
   <div className='tag-nav'>
    <h1>Top tags</h1>
    <div className='tag-nav2'>
        <input type="text" placeholder='Search for tag' className='search-tag'/>
        <div className='Following-tags'>Following tags</div>
    </div>
   </div>
   <div className='grid'>
           {tagsDev}
       </div></>
}