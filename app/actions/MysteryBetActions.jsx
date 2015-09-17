/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * MysteryBetActions
 */
import AppDispatcher from "../dispatcher/AppDispatcher";
import MysteryBetConstants from "../constants/MysteryBetConstants";

var MysteryBetActions = {

  /**
   * @param  {string} text
   */
  updateInvestment: function(investment) {
    AppDispatcher.dispatch({
      actionType: MysteryBetConstants.MYSTERYBET_UPDATE_INVESTMENT,
      investmenr: investment
    });
  },

  updateProductCode: function(productCode) {
    AppDispatcher.dispatch({
      actionType: MysteryBetConstants.MYSTERYBET_UPDATE_BETTYPE,
      betType: productCode
    });
  }

};
export default MysteryBetActions;