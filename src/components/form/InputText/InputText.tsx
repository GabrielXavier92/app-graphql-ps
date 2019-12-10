import React from "react";
import { InputMessage } from "..";

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

const constructClassName = (inputClassName: string, size: Size, hasError: boolean) =>
	`hot-form-control${size ? `--${size}` : ""} ${
		hasError ? "is-invalid" : ""
	} ${inputClassName}`.trim();

const InputText: React.FC<IInputText> = ({
	name,
	label = "",
	placeHolder = "",
	hasError = false,
	errorMessage,
	size = "",
	autoComplete,
	disabled = false,
	inputClassName = "",
	variation,
	innerRef
}: IInputText) => {
	const className = constructClassName(inputClassName, size, hasError);

	return (
		<div className='hot-form-group'>
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				ref={innerRef}
				type={variation}
				placeholder={placeHolder}
				className={className}
				autoComplete={autoComplete}
				disabled={disabled}
			/>
			<InputMessage hasError={hasError} errorMessage={errorMessage} />
		</div>
	);
};

export default InputText;
