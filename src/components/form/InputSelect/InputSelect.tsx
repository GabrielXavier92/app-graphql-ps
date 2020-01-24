import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { SelectFieldType } from "../FormBuilder/interfaces";

import { useStyles } from "../styles";

const InputSelect: React.FC<SelectFieldType> = (props: SelectFieldType) => {
	const classes = useStyles();

	const handleChange = e => {
		props.setValue(props.name, e.target.value);
	};

	const { xs, sm } = props;

	return (
		<Grid item xs={xs} sm={sm} className={classes.input}>
			<TextField
				select
				{...props}
				fullWidth
				variant='outlined'
				margin='dense'
				helperText={props.error ? props.helperText : " "}
				onChange={handleChange}
			>
				{props.options!.map(option => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</Grid>
	);
};

export default InputSelect;
