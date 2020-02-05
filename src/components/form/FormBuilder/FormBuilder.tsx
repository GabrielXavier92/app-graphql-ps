import React, { useEffect } from "react";

import { Grid, TextField, MenuItem, Paper, Typography } from "@material-ui/core";

import { IFormBuilder, IForm } from "./interfaces";

import { useForm, Controller } from "react-hook-form";

import { useStyles } from "../styles";

const FormBuilder: React.FC<IFormBuilder> = ({ form, data, id, onSubmit, title, children }) => {
	const classes = useStyles();

	const { handleSubmit, errors, control, reset, register } = useForm();

	const handleSetValues = () => {
		register({ id: data!.id });
		reset(data);
	};

	useEffect(() => {
		if (data!.id) {
			handleSetValues();
		}
	}, [data]);

	const selectInput = (form: IForm) => {
		const { validations = {} } = form;
		const error = form.formType!.name! in errors;
		const helperText = error ? form.formType.helperText : " ";

		switch (form.type) {
			case "input": {
				return (
					<Controller
						as={
							<TextField
								{...form.formType}
								error={error}
								fullWidth
								variant='outlined'
								margin='dense'
								helperText={helperText}
							/>
						}
						name={form.formType.name}
						control={control}
						rules={validations}
						defaultValue=''
					></Controller>
				);
			}
			case "select": {
				return (
					<Controller
						as={
							<TextField
								{...form.formType}
								error={error}
								select
								fullWidth
								variant='outlined'
								margin='dense'
								helperText={helperText}
							>
								{form.formType.options!.map(option => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						}
						name={form.formType.name}
						control={control}
						defaultValue=''
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
							<Grid
								item
								key={item.formType.id}
								className={classes.input}
								xs={item.formType.xs}
								sm={item.formType.sm}
							>
								{selectInput(item)}
							</Grid>
						))}
					</Grid>
					{children}
				</Paper>
			</form>
		</>
	);
};

export default FormBuilder;
