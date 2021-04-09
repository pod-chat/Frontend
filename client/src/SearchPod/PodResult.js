import styled from 'styled-components'
import PodcastTile from '../components/PodcastTile'

// STYLING //
const Container = styled.div`
    margin: 0 auto;
    width: 30%;
    border-radius: 8px;
    background-color: #F6F6F6;
    margin-top: 10px;
    padding: 10px;
`
const PodInfoDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`
const PodTitleEpisodeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 255px;
`
const PodImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 4px;
    flex-basis: 70px;
    margin-right: 10px;
`
const EpisodeTitle = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
    font-weight: 600;
    line-height: 18px;
    font-size: 15px;

`
const PodcastTitle = styled.div`
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
    font-weight: 400;
    line-height: 18px;
    font-size: 13px;
    color: darkgray;
`

const PodResult = (props) => {
    const { pod } = props;
    return (
        <Container>
            <PodcastTile props={pod} />
            <PodInfoDiv>
                <div>
                    <PodImage src={pod.image} alt={`Podcast: ${pod.title_original}`}/>
                </div>
                <PodTitleEpisodeDiv>
                    <EpisodeTitle>{ pod.title_original }</EpisodeTitle>
                    <PodcastTitle>{ pod.podcast.title_original }</PodcastTitle>
                </PodTitleEpisodeDiv>
            </PodInfoDiv>
        </Container>
    )
}

export default PodResult;