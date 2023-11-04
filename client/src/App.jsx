import React from 'react'
import {useEffect, useState} from 'react'

function App() {
  const[backendData,setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response=>response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {
      (typeof backendData.users === 'undefined') ?(
        <h1> Loading... </h1>
      ):(
        backendData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        ))
        )
    }
    </div>
  )
}

export default App
