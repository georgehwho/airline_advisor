import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('api/v1/airlines.json')
    .then( resp => {
      debugger
    })
    .catch( data => {
      debugger
    })
  }, [])

  return(
    <div className="home">
    <div className="header">
      <h1>Airline Advisor</h1>
      <p className="subheader">Honest, unbiased airline reviews. Share your experience.</p>
    </div>
    <div className="grid">
      {grid}
    </div>
  </div>
  )
}

export default Airlines