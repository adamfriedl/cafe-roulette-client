import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/coffeeShopActions';
import FlatButton from 'material-ui/FlatButton';
import RecBody from './RecBody'
import greetings from '../localData/greetings'

class Recommendation extends Component {

  render() {

    let greeting = greetings[Math.floor(Math.random()*greetings.length)]

    let shop = Object.assign({}, this.props.shops[Math.floor(Math.random()*this.props.shops.length)])

    const CustomFlatButton = (props) => (
      <FlatButton {...props}
        style={{color: 'white', backgroundColor: 'red', marginLeft: 40, marginTop: 30, marginRight: 180}}
        />
    )

    return (
      <div>
        <RecBody
          shop={shop}
          greeting={greeting}
        />

        <CustomFlatButton
          label="Gimme Another!"
          onClick={() => this.newShop()}
        />

        <CustomFlatButton
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
