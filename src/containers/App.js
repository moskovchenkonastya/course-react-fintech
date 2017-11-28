import React, { Component } from 'react';
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';
import About from '../pages/About';

import { subscribeFirebaseAction } from '../middleware/subscribeFirebase';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.subscribeToFirebase('operations', 'UPDATE_OPERATION');
    this.props.subscribeToFirebase('accounts', 'UPDATE_ACCOUNT');
  }

  CreateAndAddAccount = account => {
    this.setState({
      accounts: {
        ...this.state.accounts,
        [Object.keys(this.state.accounts).length + 1]: account
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className='App__layout'>
            <div className='App_sidebar'>
            <Sidebar accounts={this.state.accounts} />
            </div>
            <div className='App__content'>
<<<<<<< HEAD
              <Route exact path='/' component={ Home } />
              <Route exact path='/about' component={ About } />
              <Route
                path='/account/:accountId'
                component={() => <Account operations={ this.state.operations } onSubmit={ this.handleSubmit }/>}
              />
              <Route path='/create-account' component={() => (<CreateAccount createAccount={ this.CreateAndAddAccount } />)} />
=======
              <Switch>
                <Route exact path='/' component={Home} />
                <Route
                  path='/account/:accountId'
                  component={Account}
                />
                <Route
                  path='/create-account'
                  component={CreateAccount}
                />
                <Route path='/about' component={About} />
              </Switch>
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
const mapDispatchToProps = dispatch => ({
  subscribeToFirebase: (database, callType) => dispatch(subscribeFirebaseAction(database, callType))
});

export default connect(undefined, mapDispatchToProps)(App);
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
