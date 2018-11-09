import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Link from '../components/Link';

function mapStateToProps(state, ownProps) {
    return {
        active: state.view === ownProps.filter
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)