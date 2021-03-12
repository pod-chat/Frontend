import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const AuthorDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
`
const AuthorImg = styled.img`
    height: 16px;
    width: 16px;
    border-radius: 8px;
`

const AuthorName = styled.div`
    font-weight: 700;
    margin-left: 5px;
`

const AuthorHandle = styled.div`
    font-weight: 500;
    color: #989898;
    margin-left: 5px;
`

export default function PostAuthor() {

    return (
        <AuthorDiv>
                <AuthorImg src='https://www.washingtonpost.com/wp-stat/elections/2020/headshots/sanders-illo.png'/>
                <AuthorName>Bernie Sanders</AuthorName>
                <AuthorHandle>@BernieSanders</AuthorHandle>
        </AuthorDiv>
    )
}