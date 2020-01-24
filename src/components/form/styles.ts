import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(3),
		width: "100%"
	},
	input: {
		padding: `0 ${theme.spacing(1)}px`
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));
