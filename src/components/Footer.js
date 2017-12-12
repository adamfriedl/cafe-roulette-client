import React from 'react';
import WhatsHot from 'material-ui-icons/Whatshot';

const Footer = () => {
  let footerStyle = {
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center'
  };

  return (
    <div>
      <p style={footerStyle}>
        Made with <WhatsHot color={'red'} /> by Adam Friedl
      </p>
    </div>
  );
};

export default Footer;
