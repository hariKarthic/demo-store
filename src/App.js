import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, CardGrid } from './fusion-components';
import theme from './theme';
import { ThemeProvider } from 'theming';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />

          <CardGrid />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
