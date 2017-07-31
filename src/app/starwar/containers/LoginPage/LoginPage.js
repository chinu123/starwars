import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './LoginPage.css';
import { loginAction } from '../../actions/LoginActionCreator.js';

class LoginPage extends Component {
  constructor () {
    super();
    this.submit = this.submit.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.state = {
      error: null,
    };
  }
  submit (e) {
    e.preventDefault();

    // let payload = {
    //   name: this.username.getValue(),
    //   password: this.password.getValue(),
    // };
    this.props.loginUser({ userName: this.username.value, password: this.password.value })
    .then((res) => {
      this.isLoggedIn();
      // this.props.history.push('/starwar/search');
    },(error) => { alert("login falied"); } );
  }

  isLoggedIn() {
    if (this.props.loginStatus.present) {
      this.props.history.push('/starwar/search');
    }
    else {
      alert(" please check the username/ password");
    }
  }
  render () {
    return (
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={4} className={style.card}>
                <form onSubmit={this.submit}>
                  <Row center="xs">
                    <Col xs={4}>
                      <p className={style.heading}> StarWar Login </p>
                    </Col>
                  </Row>
                  <Row center="xs">
                    <Col xs={8}>
                      <p className={style.error}>{this.state.error}</p>
                    </Col>
                  </Row>
                  <Row center="xs">
                    <Col xs={9} className="text-center">
                      <input
                        label="Username"
                        ref={(input) => { this.username = input; }}
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row center="xs" className={style.marginTop}>
                    <Col xs={9} className="text-center">
                      <input
                        label="Password"
                        ref={(input) => { this.password = input; }}
                        type="text"
                        required
                      />
                    </Col>
                  </Row>
                  <Row center="xs">
                    <Col>
                      <button
                        className={style.submitButton}
                        type="submit"
                        styleType="primary"
                      >LOGIN</button>
                    </Col>
                  </Row>
                </form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

LoginPage.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  return {
    loginStatus: state.loginStatus,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: params => dispatch(loginAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
