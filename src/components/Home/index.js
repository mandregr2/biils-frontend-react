import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {
  Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid,
} from '@material-ui/core';

const vaccinationSchema = yup.object({
  name: yup
    .string('Informe seu nome home')
    .min(5, 'O nome deve conter, no mínimo, 5 caracteres')
    .required('O campo de nome é obrigatório'),
  cadsus: yup
    .string('Informe seu N⁰ do CADSUS')
    .min(5, 'O N⁰ do CADSUS deve conter, no mínimo, 5 caracteres')
    .required('O campo de N⁰ do CADSUS é obrigatório'),
  cpf: yup
    .string('Informe seu CPF')
    .min(11, 'O N⁰ do CPF deve conter, no mínimo, 11 caracteres')
    .max(14, 'O N⁰ do CPF deve conter, no máximo, 14 caracteres')
    .required('O campo de CPF é obrigatório'),
  mother_name: yup
    .string('Informe o nome de sua mãe')
    .min(5, 'O nome de sua mãe deve conter, no mínimo, 5 caracteres')
    .required('O campo de nome de sua mãe é obrigatório'),
  birth_date: yup
    .string('Informe sua data de nascimento')
    .required('O campo de data de nascimento é obrigatório'),
  age: yup
    .string('Informe sua idade')
    .required('O campo de idade é obrigatório'),
  address: yup
    .string('Informe seu endereço')
    .min(5, 'O endereço deve conter, no mínimo, 5 caracteres')
    .required('O campo de endereço é obrigatório'),
  zip_code: yup
    .string('Informe seu CEP')
    .min(8, 'O CEP deve conter, no mínimo, 8 caracteres')
    .max(9, 'O CEP deve conter, no mínimo, 9 caracteres')
    .required('O campo de CEP é obrigatório'),
  district: yup
    .string('Informe seu bairro')
    .min(5, 'O bairro deve conter, no mínimo, 5 caracteres')
    .required('O campo de bairro é obrigatório'),
  telephone: yup
    .string('Informe seu telefone')
    .required('O campo de telefone é obrigatório'),
  nationality: yup
    .string('Informe sua naturalidade')
    .min(5, 'A naturalidade deve conter, no mínimo, 5 caracteres')
    .required('O campo de naturalidade é obrigatório'),
  state: yup
    .string('Informe seu Estado')
    .min(2, 'O Estado deve conter, no mínimo, 2 caracteres')
    .required('O campo de Estado é obrigatório'),

});

const VaccinationForm = () => {
  const submitForm = async (values) => {
    try {
      const res = await axios.post('http://localhost:3000/api_prova/vaccinations', values);
      alert('Formulário enviado com sucesso!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const initialValues = {
    name: 'Maurício Covolan Rosito home',
    health_professional: '',
    cadsus: '12346',
    cpf: '946.658.897-12',
    mother_name: 'Laura Rosito',
    birth_date: '1978-10-31',
    age: '42',
    gender: 'M',
    ethnicity: 'B',
    address: 'Rua Olavo Bilac, 897',
    address_complement: 'apto 125',
    zip_code: '95700-000',
    district: 'Centro',
    telephone: '(54) 9542-1265',
    nationality: 'Porto Alegre',
    state: 'RS',
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
                id="name"
                name="name"
                label="Nome:"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="health_professional"
                name="health_professional"
                label="Profissional da Saúde (qual):"
                value={values.health_professional}
                onChange={handleChange}
                error={touched.health_professional && Boolean(errors.health_professional)}
                helperText={touched.health_professional && errors.health_professional}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="cadsus"
                name="cadsus"
                label="N⁰ do CADSUS:"
                type="number"
                value={values.cadsus}
                onChange={handleChange}
                error={touched.cadsus && Boolean(errors.cadsus)}
                helperText={touched.cadsus && errors.cadsus}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="cpf"
                name="cpf"
                label="CPF:"
                value={values.cpf}
                onChange={handleChange}
                error={touched.cpf && Boolean(errors.cpf)}
                helperText={touched.cpf && errors.cpf}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="mother_name"
                name="mother_name"
                label="Nome da mãe:"
                value={values.mother_name}
                onChange={handleChange}
                error={touched.mother_name && Boolean(errors.mother_name)}
                helperText={touched.mother_name && errors.mother_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="birth_date"
                name="birth_date"
                label="Data de nascimento:"
                type="date"
                value={values.birth_date}
                onChange={handleChange}
                error={touched.birth_date && Boolean(errors.birth_date)}
                helperText={touched.birth_date && errors.birth_date}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="age"
                name="age"
                label="Idade:"
                type="number"
                value={values.age}
                onChange={handleChange}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sexo:</FormLabel>
                <RadioGroup
                  id="gender"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="M" control={<Radio />} label="Masculino" />
                  <FormControlLabel value="F" control={<Radio />} label="Feminino" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Raça:</FormLabel>
                <RadioGroup
                  id="ethnicity"
                  name="ethnicity"
                  value={values.ethnicity}
                  onChange={handleChange}
                >
                  <FormControlLabel value="B" control={<Radio />} label="Branca" />
                  <FormControlLabel value="P" control={<Radio />} label="Preta" />
                  <FormControlLabel value="D" control={<Radio />} label="Parda" />
                  <FormControlLabel value="A" control={<Radio />} label="Amarela" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Endereço:"
                value={values.address}
                onChange={handleChange}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="address_complement"
                name="address_complement"
                label="Complemento (apto):"
                value={values.address_complement}
                onChange={handleChange}
                error={touched.address_complement && Boolean(errors.address_complement)}
                helperText={touched.address_complement && errors.address_complement}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="zip_code"
                name="zip_code"
                label="CEP:"
                value={values.zip_code}
                onChange={handleChange}
                error={touched.zip_code && Boolean(errors.zip_code)}
                helperText={touched.zip_code && errors.zip_code}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="district"
                name="district"
                label="Bairro:"
                value={values.district}
                onChange={handleChange}
                error={touched.district && Boolean(errors.district)}
                helperText={touched.district && errors.district}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="telephone"
                name="telephone"
                label="Telefone:"
                value={values.telephone}
                onChange={handleChange}
                error={touched.telephone && Boolean(errors.telephone)}
                helperText={touched.telephone && errors.telephone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="nationality"
                name="nationality"
                label="Naturalidade:"
                value={values.nationality}
                onChange={handleChange}
                error={touched.nationality && Boolean(errors.nationality)}
                helperText={touched.nationality && errors.nationality}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="state"
                name="state"
                label="UF:"
                value={values.state}
                onChange={handleChange}
                error={touched.state && Boolean(errors.state)}
                helperText={touched.state && errors.state}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>

  );
};

export default VaccinationForm;
