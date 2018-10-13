import React from 'react';
import PropTypes from 'prop-types';

import ToastContainer from '../containers/Toast/toastContainer';

const App = () => (
    <div className="app-wrapper">
        <ToastContainer />
    </div>
);

App.propTypes = {
    ready: PropTypes.func.isRequired,
    readyTime: PropTypes.instanceOf(Date)
};

export default App;
