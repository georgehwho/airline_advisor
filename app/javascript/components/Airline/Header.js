import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`

const Header = (props) => {
  const {name, image_url} = props.attributes

  return(
    <Wrapper>
      <img src={image_url} alt={name} width="50"/>
      <h1>{name}</h1>
    </Wrapper>
  )
}

export default Header