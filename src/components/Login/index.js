import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {
  Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid,
} from '@material-ui/core';

const vaccinationSchema = yup.object({
  login: yup
    .string('Informe seu nome')
    .min(5, 'O nome deve conter, no mínimo, 5 caracteres')
    .required('O campo de nome é obrigatório'),
  password: yup
    .string('Informe seu N⁰ do CADSUS')
    .min(5, 'O N⁰ do CADSUS deve conter, no mínimo, 5 caracteres')
    .required('O campo de N⁰ do CADSUS é obrigatório'),
 
});

const VaccinationForm = () => {
  const submitForm = async (values) => {
    try {
      const res = await axios.post('http://localhost:3030/login', values);
      alert('Formulário enviado com sucesso!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const initialValues = {
    login: 'admin@admin.com',
    password: '123456',
  };

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={vaccinationSchema}
      onSubmit={(values) => submitForm(values)}
    >
      {({
        handleChange, touched, errors, values,
      }) => (

        <Form>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="login"
                name="login"
                label="Login:"
                value={values.login}
                onChange={handleChange}
                error={touched.login && Boolean(errors.login)}
                helperText={touched.login && errors.login}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Senha:"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>

  );
};

export default VaccinationForm;
