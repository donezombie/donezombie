import React, { Fragment } from 'react';
import hooks from '../../hooks';

export default () => {
  const { useParticles } = hooks;
  useParticles();

  return (
    <Fragment>
      <div id="progress-bar" />
      <div id="particles-js">
        <div className="layer"></div>
      </div>
    </Fragment>
  )
}