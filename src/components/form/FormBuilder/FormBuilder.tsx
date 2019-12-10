import React from "react";
import { InputText, InputFile, InputTextArea, InputSelect, InputCheckbox } from "..";
import { IFormBuilder, IForm } from "./interfaces";
import useForm from "react-hook-form";

const FormBuilder: React.FC<IFormBuilder> = ({ formClassName = "row", form, id, onSubmit }) => {
	const { register, handleSubmit, errors, watch, setValue } = useForm();
	watch();

	const selectInput = (i: IForm) => {
		const { validations = {} } = i;

		switch (i.formType.type) {
			case "file": {
				return (
					<InputFile
						innerRef={register(validations)}
						watch={watch(i.formType.name)}
						hasError={i.formType.name in errors}
						{...i.formType}
					/>
				);
			}
			case "input": {
				return (
					<div>
						<InputText
							innerRef={register(validations)}
							hasError={i.formType.name in errors}
							{...i.formType}
						/>
					</div>
				);
			}
			case "checkbox": {
				return (
					<InputCheckbox
						innerRef={register(validations)}
						watch={watch(i.formType.name)}
						setValue={setValue}
						hasError={i.formType.name in errors}
						{...i.formType}
					/>
				);
			}
			case "textarea": {
				return (
					<InputTextArea
						innerRef={register(validations)}
						hasError={i.formType.name in errors}
						{...i.formType}
					/>
				);
			}
			case "select": {
				register({ name: i.formType.name }, i.validations);
				return (
					<InputSelect hasError={i.formType.name in errors} setValue={setValue} {...i.formType} />
				);
			}
			default: {
				throw new Error("Invalid type");
			}
		}
	};

	return (
		<>
			<form id={id} onSubmit={handleSubmit(onSubmit)}>
				<div className={formClassName}>
					{form.map((i: IForm, index) => {
						const { divClassName = "col-md-6 col-xs-12" } = i;
						return (
							<div key={index} className={divClassName}>
								{selectInput(i)}
							</div>
						);
					})}
				</div>
			</form>
		</>
	);
};

export default FormBuilder;
