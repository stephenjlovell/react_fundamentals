var React = require('react')
var PropTypes = React.PropTypes
var helpers = require('../utils/githubHelpers')

var Results = function(props) {
  return (
    <div>
      <h1>Results</h1>
      {helpers.puke(props)}
    </div>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results
