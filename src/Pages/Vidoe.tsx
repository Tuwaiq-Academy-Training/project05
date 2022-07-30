import { NavbarPage } from "../componets/Navbar";
import { Video } from "../componets/Video";
import { videos } from "../data/VidoeData";

export function VidoePage() {
    const videoDivs = videos.map((video) => <Video video={video} />);

    return (
        <>
            <NavbarPage />
            <div className="conainer-video">

                <h1 className="heading-vid">Dev Community on video</h1>
                <div className="top-vid">
                    {videoDivs}
                </div>
            </div>

        </>
    );
}