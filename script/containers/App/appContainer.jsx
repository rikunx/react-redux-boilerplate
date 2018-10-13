import { connect } from 'react-redux';

import { ready } from './appActions';
import App from '../../components/appWrapper';

function mapStateToProps(state) {
    // Unless your state is absolutely massive, don't be tempted to return the state object directly. Instead, clone it
    return {
        ...state.app
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ready() {
            dispatch(ready());
        }
    };
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
