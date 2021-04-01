import React from 'react';
import './Journey.css';
import switchImg from './imgs/switch.svg';
const Journey = (props) => {
  const {from, to} = props;
  return (
    <div className="journey">
      <div className="journey-station">
        <input type="text" readOnly name="from" value={from}
        className="journey-input journey-from"/>
      </div>
      <div className="journey-switch">
        <img src={switchImg} width="70" height="40" alt="switch"/>
      </div>
      <div className="journey-station">
      <input type="text" readOnly name="to" value={to}
        className="journey-input journey-to"
      />
      </div>
    </div>
  )
}

export default Journey ;
