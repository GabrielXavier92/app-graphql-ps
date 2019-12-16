import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: theme.spacing(25),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}))