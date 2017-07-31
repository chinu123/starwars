import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { searchPlanetAction } from '../../actions/PlanetActionCreator.js';

class SearchPlanet extends Component {
  constructor () {
    super();

    this.state = {
      error: null,
    };
    this.getFilter = this.getFilter.bind(this);
    this.planetList = this.planetList.bind(this);
  }
  componentDidMount() {

    if(this.props.loginStatus && this.props.loginStatus.present) {
      this.props.searchPlanet({ planetName: this.planetName.value });
    }
    else {
      this.props.history.push('/starwar');
    }
  }

  componentWillRecieveProps(nextProps) {

  }

  setPlanetName (e) {
    // this.setState({
    //   planetName: e.target.value
    // });
    this.props.searchPlanet({ planetName: e.target.value });
  }

  getFilter() {
    return (
      <div>
      <form>
        <field>
          <input
            placeholder="please type planet name to search "
            style={{ height: '30px', width: '500px', margin: '10px 20px 10px 40px', fontSize: '14px' }}
            ref={(input) => { this.planetName = input; }}
            onChange={this.setPlanetName.bind(this)}
            />
        </field>
      </form>
      </div>
    )
  }
  planetList () {
    const list = this.props.planetList.list.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    console.log(list, this.props.planetList.list);
    return (
      list.map(planet => (
        <div style={{ borderBottom: '1px solid #ccc', margin: '10px', fontSize: `${planet.population.length}px`,height: '30px' }}>{planet.name}:{planet.population}</div>
      ))
    );
  }

  render () {
    return (
      <div>
        <div style={{ backgroundColor: '#fff', margin: '10px', textAlign: 'center' }}>
          {this.getFilter()}
        </div>
        {
          (this.props.planetList.asyncStatus === 'SUCCESS') &&
          (<div style={{ backgroundColor: '#fff', margin: '10px', textAlign: 'center' }}>{this.planetList()}</div>)}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    loginStatus: state.loginStatus,
    planetList: state.planetList,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    searchPlanet: params => dispatch(searchPlanetAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);
