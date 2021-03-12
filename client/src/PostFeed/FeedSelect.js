import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const Selector = styled.div`
    height: 29px;
    padding: 0px 15px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
`

export default function FeedSelect() {
    
    return (
        <Selector>
            Popular ▼
        </Selector>
    )
}