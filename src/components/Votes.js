import React, { Component } from 'react'
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
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default Votes = connect(null, mapDispatchToProps)(Votes);
