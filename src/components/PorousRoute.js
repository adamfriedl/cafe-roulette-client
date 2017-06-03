import React from 'react';
import { Route } from 'react-router-dom';

export default function ({ children, ...props }) {
  return (
    <Route path={props.path}>{React.cloneElement(children, props)}</Route>
  );
}
