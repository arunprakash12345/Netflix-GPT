import React, { useRef } from 'react';
import openAi from '../utils/openAi';

const GPTSearchBar = () => {
    const searchText = useRef(null);
    const handleGPTSearchClick = async () => {
        // Make an API call and get movie results
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query.Give it form the netflix. Only give the name of 5 movies, comma seperated like the example given ahead. Example: Gadar, Sholay, Don, Kushi, Sarkar " + searchText.current.value;
        const gptResults = await openAi.chat.completions.create({
            model: 'gpt-5.2',
            messages: [
                { role: 'developer', content: gptQuery },
            ],
        });
        console.log(gptResults.choices);
    }
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' placeholder='What would you like to watch today ' className='p-4 m-4 col-span-10' />
                <button className='py-2 px-4 m-4 bg-red-700 text-white col-span-2' onClick={handleGPTSearchClick}>Search</button>
            </form>
        </div >
    )

}

export default GPTSearchBar;
