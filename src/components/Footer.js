import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Navbar, CardGrid, Heading, Row} from '../fusion-components';
import theme from '../theme';
import {ThemeProvider} from 'theming';


class Footer extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <footer>
                    <Row>
                        <div> Footer</div>
                    </Row>
                </footer>
            </ThemeProvider>
        );
    }
}

export default Footer;
