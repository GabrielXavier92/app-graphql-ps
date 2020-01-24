import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import { CheckBoxType } from "../FormBuilder/interfaces";
import { FormControlLabel } from "@material-ui/core";
import { Grid } from "@material-ui/core";

// import { useStyles } from '../styles'

const InputCheckbox: React.FC<CheckBoxType> = (props: CheckBoxType) => {
	// const classes = useStyles()

	const handleClick = e => {
		props.setValue(props.name, e.target.checked);
	};

	return (
		<Grid item xs={props.xs}>
			<FormControlLabel
				// className={classes.formControl}
				label={props.label}
				control={<Checkbox {...props} onClick={handleClick} color='primary' value={props.watch} />}
			/>
		</Grid>
	);
};

export default InputCheckbox;
