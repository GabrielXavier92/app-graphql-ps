export interface IFormBuilder {
	form: Array<IForm>;
	id?: string;
	title?: string;
	onSubmit(data: any): void;
}

export interface IForm {
	validations?: IValidations;
	type: string;
	formType: TexFieldType | SelectFieldType;
}

export type TexFieldType = InputProps & TextProps;
export type SelectFieldType = SelectProps & InputProps;
export type CheckBoxType = InputProps;

type InputProps = {
	id: string;
	name: string;
	label: string;
	helperText?: string;
	xs?: boolean | 1 | "auto" | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
	sm?: boolean | 1 | "auto" | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
	setValue?: any;
	inputRef?: any;
	error?: boolean;
	watch?: (watch: any) => void;
};

type TextProps = {
	type?: string;
};

type SelectProps = {
	options?: Array<{
		value: string;
		label: string;
	}>;
};

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
