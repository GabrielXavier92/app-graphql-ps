import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles'

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  );
}

export default Loading