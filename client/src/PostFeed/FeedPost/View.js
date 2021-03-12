import React from 'react'
import styled from 'styled-components'

//component import
import PostRank from './PostRank'
import PostTitle from './PostTitle'

//Styling - Styled Components
const PostContainer = styled.div`
    background-color: white;
    padding: 10px;
`

const RankTitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`

export default function View() {
    return(
        <PostContainer>
            <RankTitleDiv>
                <PostRank />
                <PostTitle />
            </RankTitleDiv>
            {/* //TODO: Insert PostBody component */}
            <div>
                Have you ever tasted Elk heart? so good for you, one of the leanest meats. I've got some i'll give you it on the way out. How dare you? Jamie pull up that gif of Tortoises! mic closer and all Read More
            </div>
            {/* //TODO: Insert PostAuthor component */}
            <div>
                <img style={{height: '16px', width: '16px'}} src='https://www.washingtonpost.com/wp-stat/elections/2020/headshots/sanders-illo.png'/>
                <div>Bernie Sanders</div>
                <div>@BernieSanders</div>
            </div>
            {/* //TODO: Insert PodcastTile component */}
            <div>
                PODCAST TILE
            </div>
            {/* //TODO: Insert EngagementOptions component */}
            <div>
                ENGAGEMENT BUTTONS
            </div>
        </PostContainer>
    )
}