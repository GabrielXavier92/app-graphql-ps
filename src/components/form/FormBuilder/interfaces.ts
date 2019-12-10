import { IInputCheckbox } from "./../InputCheckbox/InputCheckbox";
import { IInputSelect } from "./../InputSelect/InputSelect";
import { IInputTextArea } from "./../InputTextArea/InputTextArea";
import { IInputText } from "../InputText/InputText";
import { IInputFile } from "../InputFile/InputFile";

export interface IFormBuilder {
	formClassName?: string;
	form: Array<IForm>;
	id?: string;
	onSubmit(data: any): void;
}

export interface IForm {
	validations?: IValidations;
	divClassName?: string;
	formType: Input | File | TextArea | Select | Checkbox;
}

interface Input extends IInputText {
	type: "input";
}

interface File extends IInputFile {
	type: "file";
}

interface TextArea extends IInputTextArea {
	type: "textarea";
}

interface Select extends IInputSelect {
	type: "select";
}

interface Checkbox extends IInputCheckbox {
	type: "checkbox";
}

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
