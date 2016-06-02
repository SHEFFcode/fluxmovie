var React       = require('react');
var ReactDOM    = require('react-dom');
var appActions  = require('../actions/AppActions');
var AppStore    = require('../stores/AppStore');

var App = React.createClass({
  render: function () {
    return (
      <div>
        My App
      </div>
    )
  }
});

module.exports = App;