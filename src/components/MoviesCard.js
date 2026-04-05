import React from 'react';
import { IMG_CDN } from '../utils/constant';

const MoviesCard = ({ posterPath }) => {
    return (
        <div className='w-48 pr-4 flex-shrink-0'>
            <img alt='Movie Card' src={IMG_CDN + posterPath} />
        </div>
    )
}

export default MoviesCard
