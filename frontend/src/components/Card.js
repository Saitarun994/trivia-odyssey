import React from 'react'

function Card({name,ilink,desc,link}) {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="border-4 border-stone-900 rounded-md overflow-hidden"
    >
        <img
             src={ilink}
             alt="preview-picture" 
             className="w-full h-36 md:h-48 object-cover cursor-pointer"
          />
        <div className="w-full p-4">
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
