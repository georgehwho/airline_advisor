import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Airline from './Airline'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect( () => {
    axios.get('/api/v1/airlines.json')
    .then( resp => {
      setAirlines(resp.data.data)
      console.log(resp)
    })
    .catch( data => {
      debugger
    })
  }, [])

  const grid = airlines.map( (airline, index) => {
    return (
      <Airline
        key={index}
        attributes={airline.attributes}
      />
      // <li key={index} >{airline.attributes.name}</li>
    )
  })

  return(
    <div className="home">
    <div className="header">
      <h1>Airline Advisor</h1>
      <p className="subheader">Honest, unbiased airline reviews. Share your experience.</p>
    </div>
    <div className="grid">
      <ul>
        {grid}
      </ul>
    </div>
  </div>
  )
}

export default Airlines