var React = require("react")
require('../Main.css')
var TransitionGroup = require('react-addons-css-transition-group')

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <TransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            { React.cloneElement(this.props.children, {key: this.props.location.pathname }) }
        </TransitionGroup>
      </div>
    );
  }
})

module.exports = Main
