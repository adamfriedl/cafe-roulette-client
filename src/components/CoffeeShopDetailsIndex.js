import React from 'react';
import thumbsUp from '../assets/images/thumbs-up.png'
import thumbsDown from '../assets/images/thumbs-down.png'
import noThang from '../assets/images/no-thang.png'
import makeItRain from '../assets/images/make-it-rain.png'

const CoffeeShopDetailsIndex = (props) => {

  let flexContainer = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap'
  }

  return(
    <div style={flexContainer}>
      <div style={{marginRight: 100}}>
          <h3>Delish Snacks?</h3>
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
        <h3>Mad Scratch?</h3>
        <div style={{textAlign: 'center'}}>
          {props.shop.price_range === '$'
            ? <img
                src={noThang}
                alt={'Practically free!'}
                height={72}
                width={72}
                style={{marginTop: -15}}
              />
            : <img
                src={makeItRain}
                alt={'Julian is buying!'}
                height={72}
                width={72}
                style={{marginTop: -15}}
              />
          }
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopDetailsIndex
