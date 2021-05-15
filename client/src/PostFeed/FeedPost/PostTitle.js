import React from 'react'
import styled from 'styled-components'

const TitleDiv = styled.div`
    font-weight: 700;
    margin-left: 10px;
`

export default function PostTitle(props) {
    const {title} = props;

    return (
        <TitleDiv>
            {title}
        </TitleDiv>
    )
}