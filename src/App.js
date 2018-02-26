import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, CardGrid, Heading , Row} from './fusion-components';
import theme from './theme';
import {ThemeProvider} from 'theming';


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <header>
                        <Heading title="Heading rendered by React"/>
                        <Navbar/>
                    </header>
                    <main className="App">

                        <CardGrid/>
                    </main>
                    <footer>
                       <Row><div> Footer</div></Row>
                    </footer>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
