import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

<<<<<<< HEAD
export default ({ accounts }) => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>
      {Object.keys(accounts).map((id) => (
        <NavLink key = {id} to={'/account/' + id} className='Link' activeClassName='Link--active'>
          <div className='Sidebar__account'>
            <div className='Sidebar__account-name'>
              {accounts[id].name}
            </div>
            <div className='Sidebar__account-amount'>
              <Money value={ accounts[id].amount } currency={ accounts[id].currency } />
            </div>
          </div>
        </NavLink>
      )
      )}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>

      <NavLink to='/about' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            About
=======
const Sidebar = ({ accounts }) => {
  const accountKeys = Object.keys(accounts);

  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>

      {accountKeys.map(key => {
        const account = accounts[key];

        return (
          <NavLink key={key} to={`/account/${key}`} className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {account.name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={account.amount} currency={account.currency} />
              </div>
            </div>
          </NavLink>
        );
      })}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
          </div>
        </div>
      </NavLink>
    </div>
  );
};
<<<<<<< HEAD
=======

Sidebar.defaultProps = {
  accounts: {}
};

const mapStateToProps = state => ({
  accounts: state.accounts
});


export default withRouter(connect(mapStateToProps)(Sidebar));
>>>>>>> eb384843471cf9a4b1f7db0bd4773a064a0fe486
