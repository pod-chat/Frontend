import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const BodyDiv = styled.div`
    font-size: 15px;
    margin-bottom: 8px;
`

export default function PostBody(props) {
    const {body} = props;

    return (
        <BodyDiv>
            {body}
        </BodyDiv>
    )
}