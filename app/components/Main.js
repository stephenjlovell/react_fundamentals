var React = require("react")
var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        Main component placeholder
        {this.props.children}
      </div>
    );
  }
})

module.exports = Main
