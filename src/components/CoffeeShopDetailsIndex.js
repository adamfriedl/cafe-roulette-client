import React, { Component } from 'react';
import thumbsUp from '../assets/images/thumbs-up.png'
import thumbsDown from '../assets/images/thumbs-down.png'
import gulp from '../assets/images/gulp.png'

const CoffeeShopDetailsIndex = (props) => {

  let flexContainer = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap'
  }

  let imgStyle = {

  }

  return(
    <div style={flexContainer}>
      <div style={{marginRight: 100}}>
          <h3>Mad Delish Snacks?</h3>
            <div style={{textAlign: 'center'}}>
            {props.shop.food
              ? <img
              src={thumbsUp}
              alt={'Thumbs up!'}
              height={72}
              width={72}
              style={{marginTop: -15}}
              />
              : <img
              src={thumbsDown}
              alt={'Thumbs down!'}
              height={72}
              width={72}
              style={{marginTop: -15}}
              />
            }
            </div>

      </div>
      <div>
        <h3>Hurt on the Wallet?</h3>
        <div style={{textAlign: 'center'}}>
          <img
            src={gulp}
            alt='No worries, Julian is buying!'
            height={72}
            width={72}
            style={{marginTop: -15}}
            />
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopDetailsIndex
