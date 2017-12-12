import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import LocalCafe from 'material-ui-icons/LocalCafe';

class CoffeeAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  // eslint-disable-next-line
  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {
    const appBarStyle = {
      position: 'fixed',
      marginTop: -10,
      marginLeft: -10
    };

    return (
      <div>
        <AppBar
          style={appBarStyle}
          title="Where's for Coffee, RPS?"
          iconElementLeft={
            <IconButton>
              <LocalCafe />
            </IconButton>
          }
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer
          docked={false}
          width={200}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}>
          <MenuItem
            primaryText="Get a Coffee Shop"
            containerElement={<Link to="/" />}
            onTouchTap={() => this.toggleDrawer()}
          />
          <MenuItem
            primaryText="Submit a Coffee Shop"
            containerElement={<Link to="/coffeeshops/new" />}
            onTouchTap={() => this.toggleDrawer()}
          />
          <MenuItem
            primaryText="See 'Em All'"
            containerElement={<Link to="/coffeeshops" />}
            onTouchTap={() => this.toggleDrawer()}
          />
        </Drawer>
      </div>
    );
  }
}

export default CoffeeAppBar;
