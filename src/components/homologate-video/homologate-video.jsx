import React from "react";
import ReactPlayer from "react-player";
import video1 from "../../assets/video/production_id_4873106 (1080p).mp4";



function HomologateVideo() {
    return (
    <div className="video_homologate_section">
    <ReactPlayer 
    url={video1}
    muted={true}
    loop
    playing={true} 
    />
    </div>
);
}

export default HomologateVideo;