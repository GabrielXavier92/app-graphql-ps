import React from "react";
import { InputMessage } from "..";

export interface IInputCheckbox {
	name: string;
	label?: string;
	hasError?: boolean;
	errorMessage?: string;
	inputClassName?: string;
	innerRef?: any;
	setValue?: any;
	watch?: (watch: any) => void;
}

const constructClassName = (inputClassName, hasError) =>
	`hot-custom-control__input${hasError ? " is-invalid" : ""} ${inputClassName}`.trim();

const InputCheckbox: React.FC<IInputCheckbox> = ({
	name,
	label = "CheckBox",
	hasError = false,
	errorMessage,
	inputClassName = "",
	innerRef,
	watch,
	setValue
}) => {
	const className = constructClassName(inputClassName, hasError);

	const handleClick = () => {
		setValue(name, !watch);
	};

	return (
		<div className='hot-form-group'>
			<div className='hot-custom-control hot-custom-checkbox hot-custom-control'>
				<input name={name} ref={innerRef} type='checkbox' className={className} />
				<label onClick={handleClick} className='hot-custom-control__label' htmlFor={name}>
					{label}
				</label>
				<InputMessage hasError={hasError} errorMessage={errorMessage} />
			</div>
		</div>
	);
};

export default InputCheckbox;
