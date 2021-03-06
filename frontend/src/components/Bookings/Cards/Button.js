import React from 'react'
import styled from 'styled-components'
export const Button = ({width, padding, text, color, background, acction}) => {
    return (
        <Buttons width={width} padding={padding} background={background} color={color} onClick={acction}>
            {text}
        </Buttons>
    )
}


const Buttons = styled.div`
    width: ${props => props.width};
    margin-right: 5px;
    padding: ${props => props.padding}em;
    color:${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:${props => props.background};
    border-radius:10px;
  
  &:hover {
    cursor: pointer;
  }
`