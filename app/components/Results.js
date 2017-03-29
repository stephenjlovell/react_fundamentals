var React = require('react')
var Link = require('react-router').Link
var PropTypes = React.PropTypes

var helpers = require('../utils/githubHelpers')
var styles = require('../styles')

var UserDetailsWrapper = require('./UserDetailsWrapper')
var UserDetails = require('./UserDetails')
var MainBody = require('./MainBody')
var Loading = require('./Loading')

var Results = function(props) {
  if(!!props.isLoading) { return (<Loading speed={300} text='Loading' />) }
  var results = (props.scores[0] == props.scores[1])
    ? <TieResults />
    : <WinningResults scores={props.scores} playersInfo={props.playersInfo} />
  return (
    <MainBody>
      <div className="col-sm-8 col-sm-offset-2">
        {results}
      </div>
      <div className='col-sm-12' style={styles.space}>
        <Link to="/playerOne">
          <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
        </Link>
      </div>
    </MainBody>)
}

var WinningResults = function(props) {
  var [winningIndex,losingIndex] = (props.scores[0] > props.scores[1]) ? [0, 1] : [1, 0]
  return (
    <div>
      <h1>Results</h1>
      <UserDetailsWrapper header="Winner">
        <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Loser">
        <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
      </UserDetailsWrapper>
    </div>)
}

var TieResults = function() {
  return (<div><h1>It's a tie!</h1></div>)
}


Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results
