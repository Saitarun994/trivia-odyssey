import React from 'react'


function Card({name,ilink,desc,link,trivia}) {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-purple-900 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
    >
        <img
             src={ilink}
             alt="preview-picture" 
             className="w-full h-36 md:h-48 object-cover cursor-pointer"
          />
        <div className="w-full p-4 relative group">
          <div className="border-4 font-bold bg-purple-200 border-purple-900 rounded-md overflow-hidden shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 text-black p-2 rounded-lg shadow-lg group-hover:opacity-100 z-10 w-full h-full">
            tooltip text trivia question for you to ponder on?
          </div>
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
              {name}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
              {desc}
          </p>
              
        </div>
    </a>
  )
}

export default Card
