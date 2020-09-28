import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/homePage/Home';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
