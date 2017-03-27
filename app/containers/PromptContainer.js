var React = require('react')
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  // contextTypes let us avoid having to repeatedly inject dependencies on our Router
  // (or other components). Use sparingly.
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e) {
    e.preventDefault()
    var username = this.state.username
    this.setState({
      username: ''
    })

    if(this.props.routeParams.playerOne) {
      // player one already chosen. Go to /battle
      this.context.router.push({
        pathName: '/battle',
        query: {
          playerOne: this.props.routeParams.PlayerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.userName)
    }
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
})

module.exports = PromptContainer
