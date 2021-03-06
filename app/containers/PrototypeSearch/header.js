import React from 'react';
import PropTypes from 'prop-types';

import ReactGA from 'react-ga';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { styles } from './styles';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <h1>Prototype Search</h1>
        </Grid>
        <Grid>
          <div
            className={this.props.classes.infoText}
          >Powered by <ReactGA.OutboundLink
            eventLabel="https://gitlab.com/ankitjainmeiitk/Enumerator"
            to="https://gitlab.com/ankitjainmeiitk/Enumerator"
            target="_blank"
          >
              gitlab/ankitjainmeiitk/Enumerator
              </ReactGA.OutboundLink>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
};


export default withStyles(styles, { withTheme: true })(Header);
