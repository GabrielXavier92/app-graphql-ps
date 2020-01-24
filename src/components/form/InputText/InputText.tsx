import React from "react";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";

import { TexFieldType } from "../FormBuilder/interfaces";

import { useStyles } from "../styles";

const InputText: React.FC<TexFieldType> = (props: TexFieldType) => {
	const classes = useStyles();

	const { xs, sm } = props;
	return (
		<Grid item xs={xs} sm={sm} className={classes.input}>
			<TextField
				{...props}
				fullWidth
				variant='outlined'
				margin='dense'
				helperText={props.error ? props.helperText : " "}
			/>
		</Grid>
	);
};

export default InputText;
