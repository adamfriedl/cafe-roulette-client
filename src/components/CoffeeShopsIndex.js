import React from 'react';
import CoffeeShopDetailsIndex from './CoffeeShopDetailsIndex'

const CoffeeShopsIndex = props => {

  // update(id) {
  //   fetch('http://localhost:9000/coffee_shops/' + id)
  //     .then(res => res.json())
  //     .then(shop => console.log(shop)
  //   )
  // }

  // render() {
    // let flexContainer = {
    //   display: 'flex',
    //   justifyContent: 'left',
    //   alignItems: 'center',
    //   marginRight: 40,
    //   flexWrap: 'wrap'
    // }
    let shops = props.shops.map(shop => (
      <div key={shop.id}>

        <h2><a href='{shop.website}'>{shop.name}</a></h2>

        <h3>Description</h3>
        <p style={{marginTop: -15}}>{shop.description}</p>

        <h3>Website</h3>
        <p style={{marginTop: -15}}><a href={shop.website}>{shop.website}</a></p>

        <h3>Address</h3>
        <p style={{marginTop: -15}}>{shop.address}</p>

        <CoffeeShopDetailsIndex
          shop={shop}
        />

      </div>
    ))

    return(
      <div>
        <h1>Every Single Awesome Shop</h1>
        {shops}
      </div>
    )
  // }
}

// const mapDispatchToProps = dispatch => {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

// export default CoffeeShopsIndex = connect(null, mapDispatchToProps)(CoffeeShopsIndex)
export default CoffeeShopsIndex
