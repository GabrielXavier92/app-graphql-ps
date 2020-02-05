import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import { useStyles } from "./styles";

import { FORGOT } from "./graphql";

import SnackbarUtils from "../../utils/snack";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import Loading from "../loading";

type LoginForm = {
	email: string;
};

const ForgotForm: React.FC = () => {
	const classes = useStyles();

	const history = useHistory();

	const { register, handleSubmit, errors } = useForm<LoginForm>();

	const [forgot, { loading }] = useMutation(FORGOT, {
		onCompleted: async ({ forgotPassword }) => {
			if (forgotPassword) {
				SnackbarUtils.success("Senha resetada com sucesso, verifique seu email");
				history.replace("/");
			}
		}
	});

	const handleLogin = (data: LoginForm) => {
		const { email } = data;
		forgot({
			variables: {
				email
			}
		});
	};

	const helperText = () => {
		if (errors.email && errors.email!.type === "required") {
			return "Campo obrigatorio";
		} else if (errors.email && errors.email!.type === "minLength") {
			return "Minimo 5 caracters";
		}
		return "";
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
			{loading && <Loading />}
			<TextField
				name='email'
				inputRef={register({ required: true, minLength: 5 })}
				variant='outlined'
				margin='normal'
				fullWidth
				id='email'
				label='Email'
				autoComplete='email'
				error={"email" in errors}
				helperText={helperText()}
				autoFocus
			/>
			<Grid className={classes.submit}>
				<Button type='submit' fullWidth variant='contained' color='primary'>
					Recuperar minha senha
				</Button>
			</Grid>
			<Grid container className={classes.actions}>
				<Grid item xs>
					<Link href='/' variant='body2'>
						Voltar
					</Link>
				</Grid>
			</Grid>
		</form>
	);
};

export default ForgotForm;
