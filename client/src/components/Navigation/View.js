import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const NavBar = styled.div`
    width: 100%;
    height: 44px;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 0px;
`

const PostButton = styled.div`
    background-color: #ffffff;
    font-weight: 700;
    border-radius: 8px;
    width: 67px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function View() {
    return(
        <NavBar>
            <div>
                PodChat
            </div>
            <PostButton>Post</PostButton>
        </NavBar>
    )
}