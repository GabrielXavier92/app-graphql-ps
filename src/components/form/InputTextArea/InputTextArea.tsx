import React from "react";
import { InputMessage } from "..";

export interface IInputTextArea {
	name: string;
	label?: string;
	placeHolder?: string;
	hasError?: boolean;
	errorMessage?: string;
	rows?: number;
	inputClassName?: string;
	innerRef?: (innerRef: any) => void;
}

const constructClassName = (className, hasError) =>
	`hot-form-control${hasError ? " is-invalid" : ""} ${className}`.trim();

const InputTextArea: React.FC<IInputTextArea> = ({
	label = "",
	name,
	innerRef,
	placeHolder = "",
	hasError = false,
	rows = 5,
	inputClassName = "",
	errorMessage = ""
}) => {
	const className = constructClassName(inputClassName, hasError);

	return (
		<div className='hot-form-group'>
			<label htmlFor={name}>{label}</label>
			<textarea
				name={name}
				ref={innerRef}
				placeholder={placeHolder}
				rows={rows}
				className={className}
				style={{ resize: "none" }}
			></textarea>
			<InputMessage hasError={hasError} errorMessage={errorMessage}></InputMessage>
		</div>
	);
};

export default InputTextArea;
