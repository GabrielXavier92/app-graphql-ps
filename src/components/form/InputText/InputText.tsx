import React from "react";
import { InputMessage } from "..";
import TextField from '@material-ui/core/TextField';

export interface IInputText {
	name: string;
	label?: string;
	placeHolder?: string;
	hasError?: boolean;
	errorMessage?: string;
	size?: Size;
	autoComplete?: AutoComplete;
	disabled?: boolean;
	inputClassName?: string;
	variation: "text" | "email" | "number" | "password";
	innerRef?: (innerRef: any) => void;
}

type Size = "sm" | "lg" | "";

type AutoComplete = "on" | "off";

const InputText: React.FC<IInputText> = ({
	name,
	// label = "",
	// placeHolder = "",
	hasError = false,
	errorMessage,
	// size = "",
	// autoComplete,
	// disabled = false,
	// inputClassName = "",
	// variation,
	innerRef
}: IInputText) => {

	return (
		<div>
			<TextField name={name} inputRef={innerRef} id="outlined-basic" label="Outlined" variant="outlined" />
			<InputMessage hasError={hasError} errorMessage={errorMessage} />
		</div>
	);
};

export default InputText;
