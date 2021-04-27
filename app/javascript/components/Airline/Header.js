import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'


const Wrapper = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`

const Header = (props) => {
  const {name, image_url, avg_score} = props.attributes

  return(
    <Wrapper>
      <img src={image_url} alt={name} width="50"/>
      <h1>{name}</h1>
      <Rating score={avg_score}/>
    </Wrapper>
  )
}

export default Header