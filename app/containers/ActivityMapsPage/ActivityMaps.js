/**
 *
 * ActivityMaps
 *
 */

import React from 'react';
/* import PropTypes from 'prop-types';*/
import { withStyles } from 'material-ui/styles';


/*
import Flexbox from 'flexbox-react';
import PeriodicTableSelector from 'containers/PeriodicTableSelector';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { MdWarning } from 'react-icons/lib/md';
import Paper from 'material-ui/Paper';
*/

import Grid from 'material-ui/Grid';


import ActivityMapPlot from './ActivityMapPlot';
import TopSystems from './TopSystems';
import StructureView from './StructureView';

import { styles } from './styles';

class ActivityMaps extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      chemicalReaction: 'OER-1',
    };
  }
  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }
  render() {
    return (
      <Grid container direction="column" style={{ marginLeft: 10 }}>
        {/*
        <Paper className={this.props.classes.paper}>
          <div><MdWarning />Under construction.</div>
          <Grid
            item
          >
            <FormControl
              style={{ minWidth: 220, margin: 12 }}
            >
              <InputLabel>Chemical Reaction</InputLabel>
              <Select
                onChange={this.handleChange('chemicalReaction')}
                value={this.state.chemicalReaction}
              >
                <MenuItem value="OER-2">OER (2 descriptors)</MenuItem>
              </Select>
            </FormControl>

          </Grid>
          <Flexbox minHeight="100px">
            <PeriodicTableSelector />
          </Flexbox>
        </Paper>
        */}
        <ActivityMapPlot {...this.props} />
        <TopSystems {...this.props} />
        <StructureView {...this.props} />

      </Grid>
    );
  }
}

ActivityMaps.propTypes = {
  /* classes: PropTypes.object,*/
};

export default withStyles(styles, { withTheme: true })(ActivityMaps);

