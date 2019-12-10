import React, { useRef } from "react";
import { useInputChange } from "../../../CustomHooks/index";
import { InputMessage } from "..";

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
	placeHolder = "",
	hasError,
	errorMessage,
	disabled,
	noResultText = "",
	options,
	optionClassName,
	inputClassName,
	setValue
}: IInputSelect) => {
	const optionalProps = {
		...(hasError ? { invalid: "" } : {}),
		...(disabled ? { disabled: "" } : {}),
		...(noResultText ? { "text-no-results": noResultText } : {})
	};

	const inputSelectRef = useRef();
	useInputChange(inputSelectRef, setValue, name);

	return (
		<div className={`hot-form-group`}>
			{label && (
				<label htmlFor={name} className={`d-block`}>
					{label}
				</label>
			)}
			<hot-select
				name={name}
				ref={inputSelectRef}
				class={`w-100 ${inputClassName}`}
				placeholder={placeHolder}
				{...optionalProps}
			>
				{options.map(option => {
					return (
						<hot-select-option key={option.value} value={option.value} class={optionClassName}>
							{option.text}
						</hot-select-option>
					);
				})}
			</hot-select>

			<InputMessage hasError={hasError} errorMessage={errorMessage} />
		</div>
	);
};

export default InputSelect;
