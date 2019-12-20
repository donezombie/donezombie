import React, { Fragment } from 'react';
import hooks from '../../hooks';

export default () => {
  const { useScrollProgressbar, useParticles } = hooks;
  useScrollProgressbar();
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