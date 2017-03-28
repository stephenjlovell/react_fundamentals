var React = require('react')
var Results = require('../components/results')
var helpers = require('../utils/githubHelpers')

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    // console.log(this.props.location.state.playersInfo)
    helpers.battle(this.props.location.state.playersInfo)
      .then(function(results) {
        this.setState({
          isLoading: false,
          scores: results.map(function(results) { return results.score })
        })
      }.bind(this))
  },

  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo} />
    );
  }
})

module.exports = ResultsContainer
