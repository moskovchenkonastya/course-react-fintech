import React from 'react';

export default ({value, currency}) => {
  const val = {'RUB' : '₽', 'EUR' : '€', 'GBP' : '£', 'USD' : '$'};
  const fl = Math.floor(value);
  const round = Math.round((value - fl) * 100).toString();
  if (value - fl === 0){
    return (<span><span>{fl}</span>{'' && <span>{`,${''}`}</span>}{currency && <span>{val[currency]}</span>}</span>);
  }
  return (<span><span>{fl}</span>{round && <span>{`,${round}`}</span>}{currency && <span>{val[currency]}</span>}</span>);
}