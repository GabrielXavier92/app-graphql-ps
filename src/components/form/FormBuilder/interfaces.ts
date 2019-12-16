// import { IInputCheckbox } from "./../InputCheckbox/InputCheckbox";
// import { IInputSelect } from "./../InputSelect/InputSelect";
// import { IInputFile } from "../InputFile/InputFile";

import { TextFieldProps } from '@material-ui/core/TextField'
import { CheckboxProps } from "@material-ui/core/Checkbox"

export interface IFormBuilder {
	formClassName?: string;
	form: Array<IForm>;
	id?: string;
	onSubmit(data: any): void;
}

export interface IForm {
	validations?: IValidations;
	divClassName?: string;
	formType: TexFieldType | CheckBoxType;
}

type InputProps = {
	label: string
	grid?: boolean | 1 | "auto" | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined
}

type InputFuncions = {
	setValue?: any;
	watch?: (watch: any) => void;
}

export type TexFieldType = TextFieldProps & InputProps
export type CheckBoxType = CheckboxProps & InputProps & InputFuncions & any

interface IValidations {
	required?: string | boolean;
	min?:
	| string
	| number
	| {
		value: string | number;
		message: string;
	};
	max?:
	| string
	| number
	| {
		value: string | number;
		message: string;
	};
	maxLength?:
	| string
	| number
	| {
		value: string | number;
		message: string;
	};
	minLength?:
	| string
	| number
	| {
		value: string | number;
		message: string;
	};
	pattern?: RegExp;
}
