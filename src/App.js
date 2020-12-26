import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/homePage/Home';
import ModernBF from './pages/mbfPage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/modernbyfrancis' exact component={ } />
      </Switch>
      <Footer />
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
