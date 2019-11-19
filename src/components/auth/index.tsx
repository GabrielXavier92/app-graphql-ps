import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import LoginForm from './LoginForm'

import { useStyles } from './styles'


const Login: React.FC = () => {

	const classes = useStyles()

	return (
		<div className={classes.paper}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Clinica Legal
			</Typography>
			<LoginForm />
			<Grid container className={classes.actions}>
				<Grid item xs>
					<Link href="#" variant="body2">
						Esqueci minha senha
          </Link>
				</Grid>
				<Grid item>
					<Link href="#" variant="body2">
						Crie sua conta
					</Link>
				</Grid>
			</Grid>
		</div>

	);
};

export default Login;
