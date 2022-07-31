import { FiHome, FiTag, FiVideo } from "react-icons/fi";
import { Link } from "react-router-dom";

export function DashbaordPage() {
    return (
        <>
            <div className="v-nav">
                <ul>
                    <div className="menu">

                        <div className="def-font">
                            <FiHome className='icon-heart' size={20} />
                            <Link to={'/'}><li className="dash-font"><a>Home</a></li></Link><br />
                        </div>
                        <div className="def-font">
                            <FiVideo className='icon-vidoe' size={20} />
                            <Link to={'/podcasts'}><li className="dash-font"><a>Podcast</a></li></Link>

                        </div>
                        <div className="def-font">
                            <FiVideo className='icon-vidoe' size={20} />
                            <Link to={'/videos'}><li className="dash-font"><a>Vidoes</a></li></Link>
                        </div>
                        <div className="def-font">
                            <FiTag className='icon-tage' size={20} />
                            <Link to={'/tag'}><li className="dash-font"><a>Tags</a></li></Link><br />
                        </div>
                    </div>

                </ul>
            </div>
        </>
    )
}