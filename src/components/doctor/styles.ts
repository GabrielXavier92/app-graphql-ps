import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    width: '100%'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    padding: theme.spacing(1),
    textAlign: 'center',
  }
}))