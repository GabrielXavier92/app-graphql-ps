import React from 'react';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { FormBuilder } from '../form';

import { IForm } from "../form/FormBuilder/interfaces";


// import { useHistory } from "react-router-dom"
// import { useMutation } from "@apollo/react-hooks"

import { useStyles } from './styles'

// import { CREATE_DOCTOR } from './graphql'

// import { DoctorInput } from '../../generated/graphql';

const DoctorForm: React.FC = () => {
  const classes = useStyles()

  // const history = useHistory()

  // const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR, {
  //   onCompleted: ({ doctor }) => {
  //     console.log(doctor)
  //   }
  // })

  // const handleCreateDoctor = (data: DoctorInput) => {
  // console.log(data)
  // createDoctor({
  //   variables: {
  //     doctor: data
  //   }
  // })
  // }
  //new Date().toISOString()

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const form: Array<IForm> = [
    {
      validations: { required: true },
      divClassName: "col-md-6 col-xs-6",
      formType: {
        type: "input",
        name: "fullName",
        variation: "text"
      }
    },
    {
      validations: { required: true },
      formType: {
        type: "checkbox",
        name: "checkbox",
      }
    },
    {
      validations: { required: true },
      formType: {
        name: "country",
        type: "select",
        options: [{ value: "aaaaaaa", text: "optiomn" }],
        label: "form.label.website",
        errorMessage: "form.feedback.website",
        placeHolder: "form.placeholder.website"
      }
    }
  ];

  return (
    <Grid>
      <Paper className={classes.paper}>
        <FormBuilder id='form-builder' form={form} onSubmit={onSubmit}></FormBuilder>
        <Button form='form-builder' variant="contained" type='submit' color="primary">
          Confirm
          </Button>
      </Paper>
    </Grid>
  )
}

export default DoctorForm