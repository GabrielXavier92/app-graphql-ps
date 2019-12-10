import React from 'react'
import useForm from 'react-hook-form'
import { useHistory } from "react-router-dom"

import { useMutation } from "@apollo/react-hooks"
import { useStyles } from './styles'

import { LOGIN } from './graphql'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import Loading from '../loading'

import { MutationLoginArgs } from '../../generated/graphql';

const LoginForm: React.FC = () => {
  const classes = useStyles()

  const history = useHistory()

  const { register, handleSubmit, errors } = useForm<MutationLoginArgs>()

  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: async ({ login }) => {
      await localStorage.setItem("token", login!.token);
      history.replace('/dashboard/list')
    }
  });

  const handleLogin = (data: MutationLoginArgs) => {
    const { email, password } = data
    login({
      variables: {
        email,
        password
      }
    });

  };

  const helperText = () => {
    if (errors.password &&
      errors.password!.type === "required") {
      return "Campo obrigatorio"
    }
    else if (errors.password &&
      errors.password!.type === "minLength") {
      return "Minimo 5 caracters"
    }
    if (errors.email &&
      errors.email!.type === "required") {
      return "Campo obrigatorio"
    }
    else if (errors.email &&
      errors.email!.type === "minLength") {
      return "Minimo 5 caracters"
    }
    return ''
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
      {loading && <Loading />}
      <TextField
        name="email"
        inputRef={register({ required: true, minLength: 5 })}
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        autoComplete="email"
        error={"email" in errors}
        helperText={helperText()}
        autoFocus
      />
      <TextField
        name="password"
        inputRef={register({ required: true, minLength: 1 })}
        variant="outlined"
        margin="normal"
        fullWidth
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
        error={"password" in errors}
        helperText={helperText()}
      />
      <Grid className={classes.submit}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Entrar
      </Button>
      </Grid>
      <Grid container className={classes.actions}>
        <Grid item xs>
          <Link href="/forgot-password" variant="body2">
            Esqueci minha senha
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Crie sua conta
					</Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginForm