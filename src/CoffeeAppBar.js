import React from 'react';
import AppBar from 'material-ui/AppBar'
import coffeeToGo from './coffee-to-go.svg'


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const CoffeeAppBar = () => (
  <AppBar
    title="Title"
    iconElementLeft={coffeeToGo}
  />
);

export default CoffeeAppBar;
