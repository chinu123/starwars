import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import withLazyLoader from 'utils/lazyLoad';

import Starwar from './app/starwar/containers/RootContainer';

injectTapEventPlugin();

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/starwar" component={Starwar} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
