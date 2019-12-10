import React from 'react';
import useForm from 'react-hook-form'

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { FormBuilder } from '../form';

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
          <FormBuilder ></FormBuilder>
          <Button form='form-builder' variant="contained" type='submit' color="primary">
            Confirm
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default DoctorForm