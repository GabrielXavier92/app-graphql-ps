import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";

import ForgotForm from "./ForgotForm";

import { useStyles } from "./styles";

const ForgotPassword: React.FC = () => {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Poc Auth0
				</Typography>
				<ForgotForm />
			</div>
		</Container>
	);
};

export default ForgotPassword;
