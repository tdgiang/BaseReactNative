import React from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import StackNavigation from './routers/StackNavigation';

const RootView = (props) => {
  return <StackNavigation />;
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(RootView);
