import React from 'react';
import Money from '../Money/Money';

export default ({ title, price, type }) => (
  <div>
    <b>{title}</b> - <i>{price}</i>{type}
  </div>

);
