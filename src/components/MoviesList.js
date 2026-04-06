import React from 'react'
import MoviesCard from './MoviesCard';

const MoviesList = ({ title, movies }) => {
    // console.log(movies);
    return (
        <div className='px-6  pl-12'>
            <div>
                <h1 className='text-3xl py-6 text-white'>{title}</h1>
            </div>
            <div className='flex overflow-x-scroll no-scrollbar'>
                {
                    movies?.map((movie) => (
                        <MoviesCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default MoviesList
