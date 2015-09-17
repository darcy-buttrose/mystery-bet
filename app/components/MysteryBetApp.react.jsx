/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the MysteryBetStore and passes the new data to its children.
 */

import MysteryBet from './MysteryBet.react';
import React from 'react';
import MysteryBetStore from '../stores/MysteryBetStore';

export default class MysteryBetApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getMysteryBetState();
  }

    getMysteryBetState() {
        var betState = {
            mysteryBet: MysteryBetStore.getMysteryBet(),
        };
      return betState;
    }

  componentDidMount() {
    MysteryBetStore.addChangeListener(this._onChange.bind(this));
  };

  componentWillUnmount() {
    MysteryBetStore.removeChangeListener(this._onChange);
  };

  /**
   * @return {object}
   */
  render() {
    return (
      <div>
        <MysteryBet
          bet={this.state.mysteryBet}
        />
      </div>
    );
  };

  /**
   * Event handler for 'change' events coming from the MysteryBetStore
   */
  _onChange() {
    this.setState(this.getMysteryBetState());
  };

}
