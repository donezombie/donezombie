import React from 'react';
import hooks from '../../hooks';

const { useScrollProgressbar } = hooks;

export default () => {
  useScrollProgressbar();
  return (
    <div className="container" style={{ marginTop: 25 }}>
      Comming soon
    </div>
  )
}