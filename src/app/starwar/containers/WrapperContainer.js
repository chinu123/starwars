import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage';
import SearchPlanet from './SearchPlanets';

class WrapperContainer extends Component {
  render () {
    return (
        <div>
          <Switch>
            <Route exact={true} path={`/starwar`} component={LoginPage} />
            <Route path={`/starwar/search`} component={SearchPlanet} />
          </Switch>
        </div>
    );
  }
}
WrapperContainer.propTypes = {
  location: React.PropTypes.object.isRequired,
};

WrapperContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default (WrapperContainer);
