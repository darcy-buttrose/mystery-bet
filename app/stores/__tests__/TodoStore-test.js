/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * MysteryBetStore-test
 */

jest.dontMock('../../constants/MysteryBetConstants');
jest.dontMock('../MysteryBetStore');
jest.dontMock('object-assign');

describe('MysteryBetStore', function() {

  var MysteryBetConstants = require('../../constants/MysteryBetConstants');
  var AppDispatcher;
  var MysteryBetStore;
  var callback;

  // mock actions
  var actionMysteryBetCreate = {
    actionType: MysteryBetConstants.TODO_CREATE,
    text: 'foo'
  };
  var actionMysteryBetDestroy = {
    actionType: MysteryBetConstants.TODO_DESTROY,
    id: 'replace me in test'
  };

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    MysteryBetStore = require('../MysteryBetStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no to-do items', function() {
    var all = MysteryBetStore.getAll();
    expect(all).toEqual({});
  });

  it('creates a to-do item', function() {
    callback(actionMysteryBetCreate);
    var all = MysteryBetStore.getAll();
    var keys = Object.keys(all);
    expect(keys.length).toBe(1);
    expect(all[keys[0]].text).toEqual('foo');
  });

  it('destroys a to-do item', function() {
    callback(actionMysteryBetCreate);
    var all = MysteryBetStore.getAll();
    var keys = Object.keys(all);
    expect(keys.length).toBe(1);
    actionMysteryBetDestroy.id = keys[0];
    callback(actionMysteryBetDestroy);
    expect(all[keys[0]]).toBeUndefined();
  });

  it('can determine whether all to-do items are complete', function() {
    var i = 0;
    for (; i < 3; i++) {
      callback(actionMysteryBetCreate);
    }
    expect(Object.keys(MysteryBetStore.getAll()).length).toBe(3);
    expect(MysteryBetStore.areAllComplete()).toBe(false);

    var all = MysteryBetStore.getAll();
    for (key in all) {
      callback({
        actionType: MysteryBetConstants.TODO_COMPLETE,
        id: key
      });
    }
    expect(MysteryBetStore.areAllComplete()).toBe(true);

    callback({
      actionType: MysteryBetConstants.TODO_UNDO_COMPLETE,
      id: key
    });
    expect(MysteryBetStore.areAllComplete()).toBe(false);
  });

});
