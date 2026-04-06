import React from 'react';
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    console.log(movies.popularMovies);
    return (
        <div className='bg-black w-screen -mt-100 relative z-20 pl-6'>
            <div className='-mt-52 relative z-20'>
                <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            </div>
            <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
            <MoviesList title={"Hot and spot"} movies={movies.nowPlayingMovies} />

            <MoviesList title={"Popular"} movies={movies.nowPlayingMovies} />
            <MoviesList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        </div>
    )
}
export default SecondaryContainer
