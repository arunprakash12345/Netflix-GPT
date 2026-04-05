import React from 'react'

const VideoTitle = ({ ...props }) => {
    const { title, overview } = props;
    // console.log(title, overview);
    return (
        <div className='pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
            <h1 className='text-5xl font-semibold'>{title}</h1>
            <p className='py-6 text-lg w-1/2'>{overview}</p>
            <div className='flex gap-4'>
                <button className='bg-white text-black p-4 px-12 rounded-md text-xl hover:bg-opacity-70 '>▶  Play</button>
                <button className='bg-gray-500 text-white p-4 px-12 rounded-md text-xl bg-opacity-50 mx-2'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle
