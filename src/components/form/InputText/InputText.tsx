import React from "react";


import { FormControl } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import { TextField } from '@material-ui/core';

import { TexFieldType } from "../FormBuilder/interfaces";

import { useStyles } from '../styles'

const InputText: React.FC<TexFieldType> = (props: TexFieldType) => {
	const classes = useStyles()

	return (
		<Grid item xs={props.grid}>
			<FormControl className={classes.formControl} variant={props.variant} fullWidth>
				<TextField
					{...props}
					helperText={props.error ? props.helperText : ''}
				/>
			</FormControl>
		</Grid>
	);
};

export default InputText;
