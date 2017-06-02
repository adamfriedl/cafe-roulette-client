import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import CoffeeCupIcon from '../assets/icons/CoffeeCupIcon'

const CoffeeAppBar = () => (
  <AppBar
    title="Where's for Coffee?"
    iconElementLeft={<IconButton><CoffeeCupIcon /></IconButton>}
  />
)

export default CoffeeAppBar



// iconElementLeft={<IconButton><CoffeeCupIcon /></IconButton>}
// iconElementRight={<CoffeeCupIcon />}
