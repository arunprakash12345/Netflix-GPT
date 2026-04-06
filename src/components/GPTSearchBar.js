import React from 'react'

const GPTSearchBar = () => {
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' bg-black w-1/2 grid grid-cols-12'>
                <input type='text' placeholder='What would you like to watch today ' className='p-4 m-4 col-span-10' />
                <button className='py-2 px-4 m-4 bg-red-700 text-white col-span-2'>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar
