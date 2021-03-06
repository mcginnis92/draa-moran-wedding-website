import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './nav';
import Home from './pages/Home';
import Information from './pages/Information';
import Accommodations from './pages/Accommodations';
import Photos from './pages/Photos';
import Chicago from './pages/Chicago';
import RSVP from './pages/RSVP';
import {Wrapper, Header, GlobalStyle} from './styles';

const App = () =>
  <div className="App">
  <GlobalStyle />
    <Wrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header>Draa Moran Wedding Celebration</Header>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/information" component={Information} />
          <Route path="/accommodations" component={Accommodations} />
          <Route path="/photos" component={Photos} />
          <Route path="/chicago" component={Chicago} />
          <Route path="/rsvp" component={RSVP} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  </div>

export default App;
