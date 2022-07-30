import { NavbarPage } from '../componets/Navbar';
import { Tag } from '../componets/Tag';
import { tags } from '../data/TagData';

export function Tags() {
    const tagDivs = tags.map((tag) => <Tag tag={tag} />);

    return (
        <>
            <NavbarPage />
            <div className='tag-cont'>

                <div>
                    <h1 className='head-tag-page'>Top tags</h1>
                </div>
                <div className='card-tag'>
                    
                        <div className='top-tag'>
                            {tagDivs}

                    
                    </div>
                </div>

            </div>

        </>
    );
}