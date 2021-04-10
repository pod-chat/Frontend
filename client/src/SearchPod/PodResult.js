import styled from 'styled-components'
import PodcastTile from '../components/PodcastTile'

// STYLING //
const Container = styled.div`
    margin: 0 auto;
    width: 375px;
    border-radius: 8px;
    background-color: white;
    margin-top: 10px;
    padding-bottom: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PodResult = (props) => {
    const { pod } = props;
    return (
        <Container>
            <PodcastTile props={pod} />
            <div>
                <button className="colorButton">Start Discussing</button>
            </div>
        </Container>
    )
}

export default PodResult;
