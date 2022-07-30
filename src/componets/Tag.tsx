import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { NavbarPage } from '../componets/Navbar';
import { ITag } from '../data/TagData';

interface TagProps {
    tag: ITag;
}

export function Tag({ tag }: TagProps) {
    return (
        <>

            <div className='container-tag'>
                <div>
                    <h1 className='title-tag'>{tag.title}</h1>
                </div>


                <div className='descryption-tag'>
                    <p>{tag.description}</p>
                <div>
                    <button className='tag-btn'>Follow</button>
                </div>
                </div>

            </div>



        </>
    );
}