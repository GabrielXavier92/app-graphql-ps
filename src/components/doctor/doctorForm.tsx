import React from 'react';
import useForm from 'react-hook-form'

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { useHistory } from "react-router-dom"
import { useMutation } from "@apollo/react-hooks"

import { useStyles } from './styles'

import { CREATE_DOCTOR } from './graphql'

import { DoctorInput } from '../../generated/graphql';

const DoctorForm: React.FC = () => {
  const classes = useStyles()

  const history = useHistory()

  const { register, handleSubmit, errors, setValue, watch } = useForm<DoctorInput>()

  watch();

  const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR, {
    onCompleted: ({ doctor }) => {
      console.log(doctor)
    }
  })

  const handleCreateDoctor = (data: DoctorInput) => {
    console.log(data)
    // createDoctor({
    //   variables: {
    //     doctor: data
    //   }
    // })
  }
  //new Date().toISOString()

  const setGender = (e: any) => {
    setValue('gender', e.target.value)
  }

  return (
    <Grid>
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit(handleCreateDoctor)}>
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

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-outlined-label">
              Sexo
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="gender"
              name="gender"
              onChange={setGender}
              inputRef={register({})}
            >
              <MenuItem value={'MASCULINO'}>Masculino</MenuItem>
              <MenuItem value={'FEMININO'}>Feminino</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type='submit' color="primary">
            Confirm
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default DoctorForm