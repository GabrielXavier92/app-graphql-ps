import React from 'react';
import useForm from 'react-hook-form'

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField'

import { useHistory } from "react-router-dom"
import { useMutation } from "@apollo/react-hooks"

import { useStyles } from './styles'

import { CREATE_DOCTOR } from './graphql'

import { DoctorInput } from '../../generated/graphql';

const DoctorForm: React.FC = () => {
  const classes = useStyles()

  const history = useHistory()

  const { register, handleSubmit, errors } = useForm<DoctorInput>()

  const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR, {
    onCompleted: ({ doctor }) => {
      console.log(doctor)
    }
  })

  const handleCreateDoctor = (data: DoctorInput) => {
    createDoctor({
      variables: {
        doctor: data
      }
    })
  }
  //new Date().toISOString()

  return (
    <Grid>
      <Paper className={classes.paper}>
        <form className={classes.form}>
          <Grid item xs={6} spacing={3}>
            <TextField
              className={classes.input}
              name="name"
              inputRef={register({ required: true, minLength: 5 })}
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Nome"
              autoComplete="name"
              error={"name" in errors}
              // helperText={helperText()}
              autoFocus
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              className={classes.input}
              name="cro"
              inputRef={register({ required: true, minLength: 5 })}
              variant="outlined"
              margin="normal"
              fullWidth
              id="cro"
              label="CRO"
              autoComplete="cro"
              error={"cro" in errors}
            // helperText={helperText()}
            />
          </Grid>
          <TextField
            className={classes.input}
            name="birth"
            inputRef={register({ required: true, minLength: 5 })}
            variant="outlined"
            margin="normal"
            fullWidth
            id="birth"
            label="Data de Aniversario"
            autoComplete="birth"
            error={"birth" in errors}
          // helperText={helperText()}
          />
          <TextField
            className={classes.input}
            name="gender"
            inputRef={register({ required: true, minLength: 5 })}
            variant="outlined"
            margin="normal"
            fullWidth
            id="gender"
            label="Sexo"
            autoComplete="gender"
            error={"gender" in errors}
          // helperText={helperText()}
          />
        </form>
      </Paper>
    </Grid>
  )
}

export default DoctorForm