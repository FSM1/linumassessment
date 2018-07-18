/**
 * NotFoundPages
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Typography>These are not the droids you are looking for</Typography>
      </div>
    );
  }
}
