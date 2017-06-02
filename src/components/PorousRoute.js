import React from 'react';
import Route from 'react-router';

function ({ children, ...props }) {
  return (
    <Route path={props.path}>{React.cloneElement(children, props)}</Route>
  );
}

export default PorousRoute
