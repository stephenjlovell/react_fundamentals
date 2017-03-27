var React = require("react")
var transparentBg = require('../styles').transparentBg

var Link = require('react-router').Link

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to="/playerOne">
          <button className="btn btn-lg btn-success">
            Get started
          </button>
        </Link>
      </div>
    );
  }
})

module.exports = Home
