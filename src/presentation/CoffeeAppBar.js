import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
// import CoffeeCupIcon from '../assets/CoffeeCupIcon'

const CoffeeAppBar = () => (
  <AppBar
    title="Where's for Coffee?"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
  />
)

export default CoffeeAppBar
