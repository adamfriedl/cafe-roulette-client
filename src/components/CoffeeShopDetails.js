import React, { Component } from 'react';
import thumbsUp from '../assets/images/thumbs-up.png'
import gulp from '../assets/images/gulp.png'

const CoffeeShopDetails = (props) => {

  let flexContainer = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginRight: 40,
    flexWrap: 'wrap'
  }

  return(
    <div style={flexContainer}>
      <div style={{marginRight: 40}}>
          <h3>Mad Delish Snacks?</h3>
            <div>
            {props.shop.food
              ? <img
              src={thumbsUp}
              alt={'Thumbs up!'}
              height={120}
              width={120} />
              : <span>Negative!</span>
            }
            </div>

      </div>
      <div>
        <h3>Wallet Pain?</h3>
        <div>
          <img
            src={gulp}
            height={120}
            width={120} />
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopDetails
