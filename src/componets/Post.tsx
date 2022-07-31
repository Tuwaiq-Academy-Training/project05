import { FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IPost } from '../data/data';
import { NavbarPage } from './Navbar';

interface PostProps {
    post: IPost;
}

const profile = JSON.parse(localStorage.getItem('Profile') || "")

export function Post({ post }: PostProps) {
    return (
        <>
            <div className='post'>
                <div>
                    <img className='img-head-post' src={post.imageUrl} alt="" />
                </div>
                <div className='header'>
                    <img src={post.userAvatarUrl} alt='' />
                    <h2>{profile.name}</h2>
                    <div className='spacer'></div>
                   
                    <FiMoreHorizontal />
                </div>
                <div className='h1-prog'>
                    <h1 className='title-post'>{post.title}</h1>
                    <p className='tag-prog'>{post.tags}</p>
                </div>
                <div className='footer'>
                    <div className='icons'>
                        <div className='heart-comm'>
                            <FiHeart className='icon heart' size={30} />
                            <p className='like-comment'> {post.likeCount}</p>
                        </div>
                        <div className='heart-comm'>
                            <FiMessageCircle className='icon' size={30} />
                            <p className='like-comment'>7 comments</p>

                        </div>
                        {/* <FiSend className='icon' size={40} /> */}
                        <div className='spacer'></div>
                        <div className='save-btn-side'>
                            <p className='save-prograph'> 1 min read</p>
                            <button className='save-btn'>Save</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}