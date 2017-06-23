import React, { Component } from 'react';
<<<<<<< HEAD

class Votes extends Component {

  constructor() {
    super()

    this.state = {
      votes: 0
    }
  }

  voteButtonClick() {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {
    return(
      <div>
        <p>
          Votes: {this.state.votes}
        </p>

        <button onClick={() => this.voteButtonClick()}>Upvote</button>
=======
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions'

class Votes extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)
  }


  voteButtonClick(id, voteTicker) {
    this.props.actions.upVote(id, voteTicker)
  }


  render() {

    const voteTicker = this.props.shop.votes + 1


    return(
      <div>
        <p>
          Votes: {this.props.shop.votes}
        </p>
        <button onClick={() => this.voteButtonClick(this.props.shop.id, voteTicker)}>Upvote</button>
>>>>>>> assessment-votes-api
      </div>

    )
  }
}

<<<<<<< HEAD
export default Votes
=======
const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default Votes = connect(null, mapDispatchToProps)(Votes);
>>>>>>> assessment-votes-api
