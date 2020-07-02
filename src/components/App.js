import agent from '../agent';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { push } from 'react-router-redux';
import Landing from './Landing/index.js';
const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    // appName: state.common.appName,
    // currentUser: state.common.currentUser,
    // redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    // if (nextProps.redirectTo) {
    //   // this.context.router.replace(nextProps.redirectTo);
    //   store.dispatch(push(nextProps.redirectTo));
    //   this.props.onRedirect();
    // }
  }

  componentWillMount() {

  
      this.props.onLoad('', '');
    
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
            <Switch>
            <Route  path={this.props.match.path} component={Landing}/>

            </Switch>
        </div>
      );
    }
    return (
      <div>
        <h1>loading</h1>
      </div>
    );

    

  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
            //  <Route  path={this.props.match.path} component={Home}/>
