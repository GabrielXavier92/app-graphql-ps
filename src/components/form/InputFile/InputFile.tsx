import React, { useMemo } from "react";
import { isEmpty } from "../../../utils/object";
import InputFilePreview from "./InputFilePreview/InputFilePreview";

export interface IInputFile {
	name: string;
	label?: string;
	type: string;
	hasError?: boolean;
	errorMessage?: string;
	inputClassName?: string;
	accept?: Array<string>;
	maxSize?: number;
	watch?: (watch: any) => void;
	innerRef?: any;
}

const constructorClassName = (inputClassName: string, hasError: boolean) =>
	`hot-custom-file__input ${hasError ? "is-invalid" : ""} ${inputClassName}`.trim();

const InputFile: React.FC<IInputFile> = ({
	name,
	label = "ChoseFile",
	type,
	hasError = false,
	errorMessage = "",
	innerRef,
	inputClassName = "",
	accept,
	watch
}) => {
	const className = constructorClassName(inputClassName, hasError);

	const filesToAccept = useMemo(() => {
		return accept && accept.slice().join(", ");
	}, [accept]);

	return (
		<div className='hot-form-group'>
			<InputFilePreview file={watch} />
			<div className='hot-custom-file'>
				<input
					type={type}
					className={className}
					name={name}
					ref={innerRef}
					onChange={e => {
						console.log(e.target.files);
						console.log(watch);
					}}
					accept={filesToAccept}
				/>
				<label className='hot-custom-file__label' htmlFor={name}>
					{!isEmpty(watch) && watch ? watch[0].name : label}
				</label>
				{hasError && <div className='invalid-feedback'>{errorMessage}</div>}
			</div>
		</div>
	);
};

export default InputFile;
