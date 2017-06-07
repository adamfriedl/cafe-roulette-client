import React from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton'
import CoffeeCupIcon from '../assets/icons/CoffeeCupIcon'

export default class CoffeeAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () =>
  this.setState({
    open: !this.state.open
  });

  render() {
    return (
      <div>
        <AppBar
          title="Where's for Coffee?"
          iconElementLeft={<IconButton><CoffeeCupIcon /></IconButton>}
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={this.handleToggle}
        >
          <MenuItem>Get a Coffee Shop</MenuItem>
          <MenuItem>Create a Coffee Shop Rec</MenuItem>
          <MenuItem>See All the Shops</MenuItem>
        </Drawer>
      </div>
    )
  }
}
