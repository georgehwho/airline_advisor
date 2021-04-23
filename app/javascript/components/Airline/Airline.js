import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
`

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
    const slug = props.match.params.slug
    // Note: you can use string interpolation for this (`api/v1/${slug}`),
    // my code highlighter is struggling with it so I'm doing this
    const url = '/api/v1/airlines/' + slug

    axios.get(url)
    .then( (resp) => {
      setAirline(resp.data)
      setLoaded(true)
      console.log(resp)
    })
    .catch( data => {
      debugger
    })
  }, [])

  return(
    <div>
      <Column>
        {
          loaded &&
          <Header
            attributes={airline.data.attributes}
          />
        }

        <div className="reviews">
        </div>

      </Column>
      <Column>

      </Column>
    </div>
    )
  }

  export default Airline