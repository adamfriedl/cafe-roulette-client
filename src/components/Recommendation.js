import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import FlatButton from 'material-ui/FlatButton';
import RecBody from './RecBody'
import greetings from '../localData/greetings'

class Recommendation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      shop: Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)]),
      greeting: greetings[Math.floor(Math.random()*greetings.length)]
    }
  }

  newShop() {
    console.log('Hi, Im newShop!')
    this.setState({
      shop: Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)]),
      greeting: greetings[Math.floor(Math.random()*greetings.length)]
    })
    console.log(this.state.shop)
  }

  render() {
    // let greeting = greetings[Math.floor(Math.random()*greetings.length)]

    // let shop = Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)])

    return (
      <div>
        <RecBody
          shop={this.state.shop}
          greeting={this.state.greeting}
        />

        <FlatButton
          style={{color: 'white', marginLeft: 40, marginTop: 30, marginRight: 180}}
          backgroundColor="red"
          label="Gimme Another!"
          onClick={() => this.newShop()}
        />

        <FlatButton
          style={{color: 'white', marginLeft: 40, marginTop: 30, marginRight: 180}}
          backgroundColor="red"
          label="Where the F#@k is it?"
        />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    shops: state.shops
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default Recommendation = connect(mapStateToProps, mapDispatchToProps)(Recommendation)
