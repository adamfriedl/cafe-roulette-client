import React from 'react';
import thumbsUp from '../assets/images/thumbs-up.png'
import thumbsDown from '../assets/images/thumbs-down.png'
import noThang from '../assets/images/no-thang.png'
import makeItRain from '../assets/images/make-it-rain.png'

const CoffeeShopDetails = (props) => {

  let flexContainer = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap'
  }


  return(
    <div style={flexContainer}>
      <div style={{marginRight: 100}}>
          <h1>Delish Snacks?</h1>
            <div style={{textAlign: 'center'}}>
            {props.shop.food
              ? <img
              src={thumbsUp}
              alt={'Thumbs up!'}
              height={130}
              width={130}
              style={{marginTop: -15}}
              />
              : <img
              src={thumbsDown}
              alt={'Thumbs down!'}
              height={130}
              width={130}
              style={{marginTop: -15}}
              />
            }
            </div>

      </div>
      <div>
        <h1>Mad Scratch?</h1>
        <div style={{textAlign: 'center'}}>
          {props.shop.price_range === '$'
            ? <img
            src={noThang}
            alt={"A'int no thang!"}
            height={130}
            width={130}
            style={{marginTop: -15}}
            />
            : <img
            src={makeItRain}
            alt={'Make it rain!'}
            height={130}
            width={130}
            style={{marginTop: -15}}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopDetails
