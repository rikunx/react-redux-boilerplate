import { connect } from 'react-redux';

import Header from '../../components/navigation/header';

function mapStateToProps(state) {
    const { app } = state;
    return app;
}

function mapDispatchToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
