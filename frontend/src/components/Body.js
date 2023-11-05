import React from 'react'
//import hotspots from "../data/hotspots"
import Card from "./Card"
import { useEffect, useState } from 'react';
import axios from 'axios'


const loc="";
function Body() {

  //! Sending location to server
  const [hotspots, setHotspots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   /*
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
      .finally(() => {
        setIsLoading(false); // Set loading state to false when done
      });
  }, []); // The empty dependency array ensures this effect runs only once
  */

  //? Api loading logic
  useEffect(() => {
    // Define the endpoint URL, replacing lat and lon with actual values
    const endpoint = '/api/rochester/' + '43.1290992&-77.6290233';
    console.log(endpoint);
    // Make the API request
    axios
      .get(endpoint)
      .then((response) => {
        // Extract the data from the response
        const data = response.data;
        console.log(data);
        // Set the data to the hotspots state
        setHotspots(data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false when done
      });
  }, []);


      //console.log(hotspot.questions);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-2 bg-purple-100 min-h-[600px]">
      {isLoading ? ( // Show "Loading..." text if isLoading is true
        <p className="text-3xl">Loading...</p>
      ) : (
      
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
      )}
    </div>
  )
}
export default Body
