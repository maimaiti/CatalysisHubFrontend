/*
 *
 * ActivityMapsPage
 *
 */

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Script from 'react-load-script';
import Slide from 'material-ui/transitions/Slide';

import { reactions } from 'containers/ActivityMapsPage/ActivityMapPlot';
import ActivityMaps from './ActivityMaps';
import * as actions from './actions';


export class ActivityMapsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    let { reaction } = this.props.routeParams;
    if (_.isEmpty(reaction) && nextProps.reaction !== this.props.reaction) {
      reaction = nextProps.reaction;
    }
    if (!_.isEmpty(reaction)) {
      if (reactions.includes(reaction)) {
        this.props.saveReaction(reaction);
      }
    }
  }

  render() {
    return (
      <div>
        <Script url="/static/ChemDoodleWeb.js" />
        <Slide
          onMountEnter
          onUnmountExit
          in
          direction="left"
        >
          <ActivityMaps {...this.props} />
        </Slide>
      </div>
    );
  }
}

ActivityMapsPage.propTypes = {
  saveReaction: PropTypes.func,
  routeParams: PropTypes.object,
  reaction: PropTypes.string,
};

const mapStateToProps = (state) => ({
  selectedSystem: state.get('activityMapsPageReducer').selectedSystem,
  systems: state.get('activityMapsPageReducer').systems,
  structures: state.get('activityMapsPageReducer').structures,
  reaction: state.get('activityMapsPageReducer').reaction,
});

const mapDispatchToProps = (dispatch) => ({
  clickDot: (dot) => {
    dispatch(actions.clickDot(dot));
  },
  saveSystems: (systems) => {
    dispatch(actions.saveSystems(systems));
  },
  saveStructures: (structures) => {
    dispatch(actions.saveStructures(structures));
  },
  saveReaction: (reaction) => {
    dispatch(actions.saveReaction(reaction));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityMapsPage);
