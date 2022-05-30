import React from "react"
import PropTypes from "prop-types"
import { loadMessages } from '../actions/actionCreators'
import { connect } from 'react-redux'
class Greeting extends React.Component {

  getMessages() {
    fetch('/api/v1/message')
    .then(response => response.json())
    .then(json => {
      this.props.dispatch(loadMessages(json.text));
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getMessages();
  }

  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.message}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    message: state.messages
  }
}

export default connect(mapStateToProps)(Greeting)
