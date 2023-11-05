import React from 'react'
//import hotspots from "../data/hotspots"
import Card from "./Card"
import { useEffect, useState } from 'react';
import axios from 'axios'


const loc="";
function Body() {
/*
  //? Calculating latitude and longitude
  const [location, setLocation] = useState('43.1290992&-77.6290233');

  
  if (navigator.geolocation) {
    console.log('Geolocation is supported by your browser.');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        loc=position.coords.latitude+"&"+position.coords.longitude
        setLocation(loc)
      },
      (error) => {
        console.log('Geolocation error:', error);
        setLocation('Location not available');
      }
    );
  } else {
    console.log('Geolocation is not supported by your browser.');
    setLocation('Geolocation is not supported by your browser');
  }
  console.log(location)
*/

  //! Sending location to server
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    // Define the endpoint URL, replacing lat and lon with actual values
    
    const endpoint = '/api/rochester/'+"43.1290992&-77.6290233";
    console.log(endpoint);
    // Make the API request
    axios.get(endpoint)
      .then(response => {
        // Extract the data from the response
        const data = response.data;
        console.log(data);
        // Set the data to the hotspots state
        setHotspots(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Define the endpoint URL, replacing lat and lon with actual values
    
    const endpoint = '/api/getquestions/'+"43.1290992&-77.6290233";
    console.log(endpoint);
    // Make the API request
    axios.get(endpoint)
      .then(response => {
        // Extract the data from the response
        const data = response.data;
        console.log(data);
        // Set the data to the hotspots state
        setHotspots(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once
  

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      console.log(hotspot.questions);
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
