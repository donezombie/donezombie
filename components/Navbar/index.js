import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import routes from '../../src/routes';

const Navbar = () => {
  const router = useRouter();
  const { push, asPath } = router;

  const pushNavigation = useCallback((path) => {
    push(path);
  }, []);

  return (
    <div id="navbar">
      <div className="container">
        <Grid container spacing={3} className="spacing-container-grid">
          <Grid item xs={12} md={3} style={{ position: 'relative' }}>
            <div className="box-circle avatar">
              <img src="/static/assets/avatar.jpg" alt="avatar" />
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className="box-right">
              <ul>
                {
                  routes.map(el => <li className={el.path === asPath ? 'active_link' : ''} key={el.path} onClick={() => pushNavigation(el.path)}>{el.label}</li>)
                }
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Navbar;
