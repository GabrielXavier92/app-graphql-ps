import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { InputText, InputSelect } from "..";

import { IFormBuilder, IForm } from "./interfaces";

import useForm from "react-hook-form";

import { useStyles } from "../styles";

const FormBuilder: React.FC<IFormBuilder> = ({ form, id, onSubmit, title, children }) => {
	const classes = useStyles();

	const { register, handleSubmit, errors, watch, setValue } = useForm();
	watch();

	const selectInput = (form: IForm) => {
		const { validations = {} } = form;

		switch (form.type) {
			case "input": {
				return (
					<InputText
						inputRef={register(validations)}
						error={form.formType!.name! in errors}
						{...form.formType}
					/>
				);
			}
			case "select": {
				register({ name: form.formType.name }, form.validations);
				return (
					<InputSelect
						inputRef={register(validations)}
						error={form.formType.name in errors}
						setValue={setValue}
						{...form.formType}
					/>
				);
			}
			// case "checkbox": {
			// 	return (
			// 		<InputCheckbox inputRef={register(validations)} setValue={setValue} {...form.formType} />
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
			<form id={id} onSubmit={handleSubmit(onSubmit)}>
				<Paper className={classes.paper}>
					<Typography variant='h5' gutterBottom>
						{title}
					</Typography>
					<Grid container>
						{form.map((item: IForm) => (
							<React.Fragment key={item.formType.id}>{selectInput(item)}</React.Fragment>
						))}
					</Grid>
					{children}
				</Paper>
			</form>
		</>
	);
};

export default FormBuilder;
