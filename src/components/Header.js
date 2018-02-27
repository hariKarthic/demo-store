import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Navbar, CardGrid, Heading , Row} from '../fusion-components';
import theme from '../theme';
import {ThemeProvider} from 'theming';

class Header extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                    <header className="tests">
                        <Heading title="Heading rendered by React"/>
                        <Navbar/>
                    </header>
            </ThemeProvider>
        );
    }
}

export default Header;
