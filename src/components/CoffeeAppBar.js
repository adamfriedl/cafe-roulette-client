import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import CoffeeCupIcon from '../assets/icons/CoffeeCupIcon'
import AsyncCoffeeShopMap from './AsyncCoffeeShopMap'
import withScriptjs from "react-google-maps/lib/async/withScriptjs"

class CoffeeAppBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {

    const appBarStyle = {
      position: 'fixed',
      marginTop: -10
    }

    return (
      <div>
        <AppBar
          style={appBarStyle}
          title="Where's for Coffee, 520?"
          iconElementLeft={<IconButton><CoffeeCupIcon /></IconButton>}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer
          docked={false}
          width={200}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >

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

        <Drawer
          docked={false}
          width={400}
          onRequestChange={this.toggleDrawer}
          open={true}
          openSecondary={true}
        >
          <AsyncCoffeeShopMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrBZpXEt2eFvE4OOuXT3KqI60s2vRS8YY"
            loadingElement={
              <div style={{ height: `100%` }}>

              </div>
            }
            containerElement={
              <div style={{    position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'flex-end',
                  alignItems: 'center',}} />
            }
            mapElement={
                <div style={{    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }} />
            }
          />

        </Drawer>
      </div>
    )
  }
}

export default CoffeeAppBar
