var React = require('react')
var Axios = require('axios')

var id = 'GITHUB_CLIENT_ID'
var secret = 'GITHUB_SECRET_KEY'
var param = '?client_id=' + id + '&client_secret=' + secret

// fetch GitHub user data for username
function getUserInfo(username){
  return Axios.get('https://api.github.com/users/' + username + param)
}

  // fetch Github repos for username
function getRepos(username) {
  return Axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

// getTotalStars calculates total number of stars player has for all repos.
function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function evalScore(followers, stars) {
  return (followers * 3) + stars
}

function getPlayerData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars,
        score: evalScore(player.followers, totalStars)
      }
    })
}

// calculateScores returns an array with scores for each player
function calculateScores(players) {
  return Axios.all(players.map(getPlayerData))
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
  },

  // puke: function(object) {
  //   return (
  //     <pre>{JSON.stringify(object, null, ' ')}</pre>
  //   )
  // },

  battle: function(players) {
    return calculateScores(players)
  }
}

module.exports = helpers
