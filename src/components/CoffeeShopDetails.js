import React from 'react';
import thumbsUp from '../assets/images/thumbs-up.png'
import thumbsDown from '../assets/images/thumbs-down.png'
import gulp from '../assets/images/gulp.png'

const CoffeeShopDetails = (props) => {

  let flexContainer = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap'
  }


  return(
    <div style={flexContainer}>
      <div style={{marginRight: 100}}>
          <h1>Mad Delish Snacks?</h1>
            <div style={{textAlign: 'center'}}>
            {props.shop.food
              ? <img
              src={thumbsUp}
              alt={'Thumbs up!'}
              height={120}
              width={120}
              style={{marginTop: -15}}
              />
              : <img
              src={thumbsDown}
              alt={'Thumbs down!'}
              height={120}
              width={120}
              style={{marginTop: -15}}
              />
            }
            </div>

      </div>
      <div>
        <h1>Hurt on the Wallet?</h1>
        <div style={{textAlign: 'center'}}>
          <img
            src={gulp}
            alt='No worries, Julian is buying!'
            height={120}
            width={120}
            style={{marginTop: -15}}
            />
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopDetails
