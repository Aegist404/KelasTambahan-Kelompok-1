import React from 'react'
import CardRpl from "./CardRpl";
import CardDkv from "./CardDkv";


const MainContent = () => {
  return (
    <div>
    <div className='flex justify-center items-center h-screen'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-8 md:w-4/5 ">
        <CardRpl/>
        <CardDkv/>
    </div>
    </div>
    </div>
  )
}

export default MainContent
