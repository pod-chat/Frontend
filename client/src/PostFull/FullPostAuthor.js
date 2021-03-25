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
const PostAuthorAgeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const PostAuthorDetails = styled.div`
    display: flex;
    justify-content: space-between;
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

const PostAge = styled.div`
    font-size: 13px;
    font-weight: 500;
    margin-left: 5px;
    color: gray;
`

export default function FullPostAuthor() {

    return (
        <AuthorDiv>
                <AuthorImgBig src='https://pyxis.nymag.com/v1/imgs/a62/6fe/0eac2a6f2d97817064adbee944d0129ea2-bernie-sanders.rhorizontal.w700.jpg' />
                <PostAuthorAgeDiv>
                    <PostAuthorDetails>
                        <AuthorName>Bernie Sanders</AuthorName>
                        <AuthorHandle>@BernieSanders</AuthorHandle>
                    </PostAuthorDetails>
                    <PostAge>20h</PostAge>
                </PostAuthorAgeDiv>     
        </AuthorDiv>
    )
}