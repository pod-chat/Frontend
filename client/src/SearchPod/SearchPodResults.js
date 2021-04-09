import { connect } from 'react-redux';
import PodResult from './PodResult'

const SearchPodResults = (props) => {

    return (
        <div>
            {props.isLoading ? <h3>Searching...</h3> : null}
            {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
            {
                props.searchResults.map((pod) => (
                    <PodResult key={pod.id} pod={pod}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
          // State from API
          isLoading: state.isLoading,
          error: state.error,
          searchResults: state.searchResults
    }
  }

export default connect(mapStateToProps, {})(SearchPodResults)