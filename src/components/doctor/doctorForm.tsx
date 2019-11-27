import React from 'react';
import useForm from 'react-hook-form'

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useHistory } from "react-router-dom"

import { Doctor } from '../../generated/graphql';

const DoctorForm: React.FC = () => {
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm<Doctor>()
  //new Date().toISOString()

  return (
    <Grid>
      <Paper>
        Doctor Form
      </Paper>
    </Grid>
  )
}

export default DoctorForm