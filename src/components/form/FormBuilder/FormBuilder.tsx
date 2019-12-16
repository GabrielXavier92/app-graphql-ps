import React from "react";
import {
	InputText, InputCheckbox
	// InputFile, InputSelect
} from "..";

import { IFormBuilder, IForm } from "./interfaces";

import useForm from "react-hook-form";

import { useStyles } from '../styles'

const FormBuilder: React.FC<IFormBuilder> = ({ form, id, onSubmit }) => {
	const classes = useStyles()

	const { register, handleSubmit, errors, watch, setValue } = useForm();
	watch();

	const selectInput = (form: IForm) => {
		const { validations = {} } = form;

		switch (form.formType.type) {
			case "input": {
				return (
					<InputText
						inputRef={register(validations)}
						error={form.formType!.name! in errors}
						{...form.formType}
					/>
				);
			}
			case "checkbox": {
				return (
					<InputCheckbox
						inputRef={register(validations)}
						setValue={setValue}
						{...form.formType}
					/>
				);
			}
			// case "select": {
			// 	register({ name: i.formType.name }, i.validations);
			// 	return (
			// 		<InputSelect hasError={i.formType.name in errors} setValue={setValue} watch={watch(i.formType.name)} {...i.formType} />
			// 	);
			// }
			// case "file": {
			// 	return (
			// 		<InputFile
			// 			innerRef={register(validations)}
			// 			watch={watch(i.formType.name)}
			// 			hasError={i.formType.name in errors}
			// 			{...i.formType}
			// 		/>
			// 	);
			// }

			// case "textarea": {
			// 	return (
			// 		<InputTextArea
			// 			innerRef={register(validations)}
			// 			hasError={i.formType.name in errors}
			// 			{...i.formType}
			// 		/>
			// 	);
			// }

			default: {
				throw new Error("Invalid type");
			}
		}
	};

	return (
		<>
			<form id={id} className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				{form.map((item: IForm) =>
					(selectInput(item))
				)}
			</form>
		</>
	);
};

export default FormBuilder;
