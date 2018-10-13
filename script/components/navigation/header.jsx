import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const Header = () => (
    <AppBar id="app-header" position="fixed" color="primary">
        <Toolbar>
            <Typography align="left" variant="title" color="inherit">
                <Icon>settings_input_component</Icon>
                App UI
            </Typography>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {};

export default Header;
