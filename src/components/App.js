import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Navbar, CardGrid, Heading, Row} from '../fusion-components';
import theme from '../theme';
import {ThemeProvider} from 'theming';


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <main className="App">
                    <CardGrid/>
                </main>
            </ThemeProvider>
        );
    }
}

export default App;
