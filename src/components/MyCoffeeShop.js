import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import shouldPureComponentUpdate from 'react-pure-render/function';

export default class MyCoffeeShop extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {

    const kWidth = 20
    const kHeight = 20

    const coffeeShopStyle = {
      // initially any map object has left top corner at lat lng coordinates
      // it's on you to set object origin to 0,0 coordinates
      position: 'absolute',
      width: kWidth,
      height: kHeight,
      left: -kWidth / 2,
      top: -kHeight / 2,

      border: '5px solid red',
      borderRadius: 40,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    };



    return (
       <div style={coffeeShopStyle}>
          {this.props.text}
       </div>
    );
  }
}
