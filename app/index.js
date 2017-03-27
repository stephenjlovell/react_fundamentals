var React = require('react')
var ReactDOM = require('react-dom')

var HelloWorld = React.createClass({
  render: function(){
    return (<div>Hello, {this.props.name}</div>)
  }
})

// Parent component
var FriendsContainer = React.createClass({
  render: function(){
    var name = "Steve"
    var coworkers = ["Todd", "Steven", "Rachel", "Phil"]
    return (
      <div>
        <h3>Name: {name}</h3>
        <ShowList names={coworkers} />
      </div>
    )
  }
})

// Child component
var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(coworker){ return <li> {coworker} </li>; })
    return (
      <div>
        <h3> Coworkers: </h3>
        <ul>{listItems}</ul>
      </div>
    )
  }
})



// ReactDOM.render(<HelloWorld name="Steve"/>, document.getElementById('app'))

ReactDOM.render(<FriendsContainer />, document.getElementById('app'))
