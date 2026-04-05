import React, { useEffect, useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useMovieTrailer(movieId);
    if (!trailerVideo) return null;
    return (
        <div >
            <iframe
                className="w-screen h-screen aspect-video "
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"

            ></iframe>
        </div >
    );
};

export default VideoBackground;
