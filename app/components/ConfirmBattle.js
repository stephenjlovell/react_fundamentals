var React = require('react')
var styles = require('../styles/')
var PropTypes = React.PropTypes
var Link = require('react-router').Link

var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
var MainBody = require('./MainBody')
var Loading = require('./Loading')

function ConfirmBattle(props) {
  if(!!props.isLoading) { return (<Loading speed={300} text='Loading'/>) }
  return (
      <MainBody>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          <button
            type='button'
            className='btn btn-lg btn-success'
            onClick={props.onInitiateBattle}>
            Initiate Battle!
          </button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
          </Link>
        </div>
      </div>
    </MainBody>)
}

ConfirmBattle.PropTypes = {
  onInitiateBattle: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle
