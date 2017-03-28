var React = require('react')
var PropTypes = React.PropTypes;

var transparentBg = require('../styles').transparentBg

// Prompt is an example of a "functional stateless component"
function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github username"
              type="text"
              onChange={props.onUpdateUser}
              value={props.username}/>
          </div>
          <div className="form-group" className="col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Just declare propTypes on the function body since we're using a named function.
Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt
