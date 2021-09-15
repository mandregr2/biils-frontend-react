import React from 'react';
import { Redirect } from 'react-router'
import { Formik, Form } from 'formik';
import {Route} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import {
  Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid,
} from '@material-ui/core';

import Home from '../Home/index';


const loginSchema = yup.object({
  login: yup
    .string('Informe seu nome')
    .min(3, 'O nome deve conter, no mínimo, 3 caracteres')
    .required('O campo de nome é obrigatório'),
  password: yup
    .string('Informe sua senha')
    .min(6, 'A senha deve ter no mínimo 5 caracteres')
    .required('A senha é obrigatória'),
 
});

const LoginForm = () => {
  const submitForm = async (values) => {
    try {
      const res = await axios.post('http://localhost:3030/login', values);
      console.log(res.data);
      window.location = "/Home"; 
      } catch (err) {
      console.error(err);
    }
  };

  const initialValues = {
    login: 'andre@andre',
    password: '123456',
  };

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
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

export default LoginForm;
