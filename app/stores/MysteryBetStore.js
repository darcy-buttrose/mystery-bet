/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * MysteryBetStore
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import MysteryBetConstants from '../constants/MysteryBetConstants';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

var _productCode = "T";
var _optionNumber = 2;
var _numberOfBets = 1;
var _investment = 0;
var _totalCost = 0;
var _flexiPercent = 0;

function refreshTotalCost() {
    _totalCost = _investment * _numberOfBets;
}

function refreshFlexiPercent() {
    _flexiPercent = 1 / _numberOfBets;
}

function updateInvestment(investment) {
    _investment = investment;
    refreshTotalCost();
}

function updateNumberOfBets(numberOfBets) {
    _numberOfBets = numberOfBets;
    refreshFlexiPercent();
    refreshTotalCost();
}

function updateProductCode(productCode) {
    _productCode = productCode;
}

function updateOptionNumber(optionNumber) {
    _optionNumber = optionNumber;
}

var MysteryBetStore = assign({}, EventEmitter.prototype, {

  /**
   * Tests whether all the remaining TODO items are marked as completed.
   * @return {boolean}
   */
  areAllComplete: function() {
    for (var id in _todos) {
      if (!_todos[id].complete) {
        return false;
      }
    }
    return true;
  },

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getMysteryBet: function() {
    return {
      productCode: _productCode,
      optionNumber: _optionNumber,
      numberOfBets: _numberOfBets,
      investment: _investment,
      flexiPercent: _flexiPercent,
        totalCost: _totalCost
    };
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});
export default MysteryBetStore;

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case MysteryBetConstants.MYSTERYBET_UPDATE_INVESTMENT:
        updateInvestment(action.investment);
        MysteryBetStore.emitChange();
        break;

    case MysteryBetConstants.MYSTERYBET_UPDATE_BETTYPE:
        updateProductCode(action.betType);
        MysteryBetStore.emitChange();
        break;

    case MysteryBetConstants.MYSTERYBET_UPDATE_NUMBEROFBETS:
        updateNumberOfBets(action.numberOfBets);
        MysteryBetStore.emitChange();
        break;

    case MysteryBetConstants.MYSTERYBET_UPDATE_OPTION:
        updateOptionNumber(action.optionNumber);
        MysteryBetStore.emitChange();
        break;

    default:
      // no op
  }
});