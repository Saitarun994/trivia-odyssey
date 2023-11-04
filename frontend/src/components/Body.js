import React from 'react'
import hotspots from "../data/hotspots"
import Card from "./Card"

function Body() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hotspots.map(hotspot=>(
            <Card
                name={hotspot.name}
                ilink={hotspot.ilink}
                desc={hotspot.desc}
                link={hotspot.link}
            />
        ))}
      </div>
    </div>
  )
}

export default Body
