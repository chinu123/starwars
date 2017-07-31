import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import WrapperContainer from '../WrapperContainer';
import store from '../../store.js';

class RootContainer extends Component {

  render () {
    console.log("render");
    return (
      <div>
        <Provider store={store}>
          <div>
              <Switch>
                <Route path={`${this.props.match.url}`} component={WrapperContainer} />
              </Switch>
          </div>
        </Provider>
      </div>
    );
  }
}

RootContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default (RootContainer);
