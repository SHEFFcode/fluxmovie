var AppDispatcher   = require('../dispatcher/Dispatcher');
var AppConstants    = require('../constants/AppConstants');
var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');
var AppApi          = require('../utils/appApi');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function (payload) {
  var action = payload.action;
  switch (action.actionType) {

  }
  return true;
});

module.exports = AppStore;