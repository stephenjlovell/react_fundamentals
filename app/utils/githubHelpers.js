var React = require('react')
var Axios = require('axios')

var id = 'GITHUB_CLIENT_ID'
var secret = 'GITHUB_SECRET_KEY'
var param = '?client_id=' + id + '&client_secret=' + secret

function getUserInfo(username){
  return Axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  // Fetch data from Github using Axios and return as a promise.
  getPlayersInfo: function(players){
    return Axios.all(players.map(function(player){
      return getUserInfo(player)
    })).then(function(info){
      return info.map(function(user) { return user.data })
    }).catch(function(err){
      console.log('Error in getPlayersInfo', err)
    })
  }
}

module.exports = helpers
