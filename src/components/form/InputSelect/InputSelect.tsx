import React, { useRef } from "react";
import { useInputChange } from "../../../customHooks";
import { InputMessage } from "..";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import { useStyles } from './styles'

export interface IInputSelect {
	name: string;
	label?: string;
	placeHolder?: string;
	hasError?: boolean;
	errorMessage?: string;
	disabled?: boolean;
	noResultText?: string;
	options: Array<{
		value: string;
		text: string;
	}>;
	optionClassName?: string;
	inputClassName?: string;
	setValue?: any;
}

const InputSelect: React.FC<IInputSelect> = ({
	name,
	label,
	// placeHolder = "",
	hasError,
	errorMessage,
	// disabled,
	// noResultText = "",
	options,
	// optionClassName,
	// inputClassName,
	setValue
}: IInputSelect) => {
	const classes = useStyles()

	const inputSelectRef = useRef();
	useInputChange(inputSelectRef, setValue, name);

	return (
		<div >
			<FormControl variant="filled" className={classes.formControl}>
				{label && (
					<InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
				)}

				<Select
					labelId="demo-simple-select-filled-label"
					id="demo-simple-select-filled"
					name={name}
					ref={inputSelectRef}
				>
					{options.map(option => {
						return (
							<MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
						);
					})}
				</Select>
			</FormControl>

			<InputMessage hasError={hasError} errorMessage={errorMessage} />
		</div>
	);
};

export default InputSelect;
