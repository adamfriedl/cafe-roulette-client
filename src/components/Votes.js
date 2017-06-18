import React, { Component } from 'react';

class Votes extends Component {

  voteButtonClick() {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {
    return(
      <div>
        <p>
          Votes: {this.props.votes}
        </p>

        <button onClick={() => this.voteButtonClick()}>Upvote</button>
      </div>

    )
  }
}

export default Votes
