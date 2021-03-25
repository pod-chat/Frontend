import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const AuthorDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 15px;
`
const AuthorImgBig = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 8px;
    object-fit: cover;
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

export default function FullPostAuthor() {

    return (
        <AuthorDiv>
                <AuthorImgBig src='https://pyxis.nymag.com/v1/imgs/a62/6fe/0eac2a6f2d97817064adbee944d0129ea2-bernie-sanders.rhorizontal.w700.jpg' />
                <AuthorName>Bernie Sanders</AuthorName>
                <AuthorHandle>@BernieSanders</AuthorHandle>
        </AuthorDiv>
    )
}