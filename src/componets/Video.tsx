import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { NavbarPage } from '../componets/Navbar';
import { IVideo } from '../data/VidoeData';

interface VideoProps {
    video: IVideo;
}

export function Video({ video }: VideoProps) {
    return (
        <>
            <div className="card-ctn">

                <div className="card">
                    <div className="card-video-ctn"><video src={video.videoUrl} className="card-video" controls></video></div>
                    <div className="card-info-ctn">
                        <div className="card-info">

                            <h4 className="card-title" >{video.description}</h4>


                            <p className="card-description">
                                {video.textFooter}
                            </p>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}