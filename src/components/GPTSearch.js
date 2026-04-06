import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import { USER_IMG } from '../utils/constant'
const GPTSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={USER_IMG}
                    alt="Netflix Login image background"
                    className="w-full h-screen object-cover"
                />
            </div>
            <GPTSearchBar />
            <GPTMoviesSuggestion />
        </div>
    )
}

export default GPTSearch
