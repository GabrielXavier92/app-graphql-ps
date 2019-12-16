import React, { useRef, useState, useEffect } from "react";
import { InputMessage } from "..";

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useStyles } from '../styles'

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
	watch?: (watch: any) => void;
}

const InputSelect: React.FC<IInputSelect> = ({
	name,
	label = "",
	hasError,
	errorMessage,
	options,
	setValue
}: IInputSelect) => {
	const classes = useStyles()

	const inputLabel = useRef<HTMLLabelElement>(null);
	const [labelWidth, setLabelWidth] = useState(0);
	const [select, setSelect] = useState('')

	useEffect(() => {
		setLabelWidth(inputLabel.current!.offsetWidth);
	}, []);

	const handleChange = (e) => {
		setValue(name, e.target.value)
		setSelect(e.target.value)
	}

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel id={name} ref={inputLabel}>{label}</InputLabel>
			<Select
				labelId={name}
				id="demo-simple-select-filled"
				name={name}
				value={select}
				onChange={handleChange}
				labelWidth={labelWidth}
			>
				{options.map(option => {
					return (
						<MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
					);
				})}
			</Select>
			<InputMessage hasError={hasError} errorMessage={errorMessage} />
		</FormControl>

	);
};

export default InputSelect;
