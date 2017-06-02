import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const CoffeeShopDetail = () => (
  <div>
    <Paper style={style} zDepth={3} />
  </div>
);

export default CoffeeShopDetail;
