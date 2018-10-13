import React from 'react';
import { Provider } from 'react-redux';

import '../css/index.styl'; // application stylesheet

import store from './store';
import HeaderContainer from './containers/Header/headerContainer';
import AppWrapperContainer from './containers/App/appContainer';
import ThemeWrapper from './components/themeWrapper';

const App = () => (
    <Provider store={store}>
        <div id="app">
            <ThemeWrapper>
                <HeaderContainer />
                <div id="app-body">
                    <AppWrapperContainer />
                </div>
            </ThemeWrapper>
        </div>
    </Provider>
);

export default App;
