import React from 'react'
import WhatsHot from 'material-ui-icons/Whatshot'

const Footer = () => {

let footerStyle = {
    marginTop: 80,
    textAlign: 'center'
  }

  return (
    <div>
      <p style={footerStyle}>
        Made with <WhatsHot color={'orange'}/> by Adam Friedl
      </p>

    </div>
  )
}

export default Footer
