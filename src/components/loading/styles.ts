import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  loading: {
    zIndex: 1000,
    backgroundColor: 'white',
    opacity: '0.5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute'
  }
}))