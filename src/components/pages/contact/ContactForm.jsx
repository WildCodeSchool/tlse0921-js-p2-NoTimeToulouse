import React from 'react';
import styled from 'styled-components';
import validate from './ContactFormValidation';
import useForm from './useForm';

const Title = styled.h2`
  font-family: var(--title-font);
  text-align: center;
  font-size: 2em;
`;

const UserCategory = styled.div`
  padding: auto;
  align-self: center;

  select {
    font-family: var(--text-font);
    width: 150px;
    height: 40px;
    border-radius: 5px;
  }

  option {
    font-family: var(--text-font);
    text-align: center;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
`;

const Form = styled.form`
  margin-top: 25%;
  padding-bottom: 2em;
  background-color: #86bbd8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  @media (min-width: 480px) {
    width: 50%;
  }
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-family: var(--text-font);
    margin-top: 1.5em;
    width: 80%;
  }
  input {
    font-family: var(--text-font);
    margin-top: 5px;
    width: 100%;
    border: 0;
    height: 40px;
    border-radius: 5px;
  }

  textarea {
    font-family: var(--text-font);
    margin-top: 5px;
    width: 100%;
    height: 150px;
    border: 0;
    border-radius: 5px;
  }
`;
const Button = styled.input`
  font-family: var(--title-font);
  width: 80%;
  height: 50px;
  margin-top: 1em;
  background-color: #f06e96;
  border-radius: 5px;
  border: 0;
  font-size: 20px;
  &:hover {
    background-color: #f06e96;
  }
`;

const ContactForm = () => {
  function sentMessage() {
    alert('Message envoyé !');
  }
  const {
    values, errors, handleChange, handleSubmit,
  } = useForm(
    sentMessage,
    validate,
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Contactez-nous</Title>
      <UserCategory>
        <select type="select">
          <name>Qui êtes vous ?</name>
          <option>Spectateur</option>
          <option>Organisateur</option>
          <option>Sponsor</option>
        </select>
      </UserCategory>
      <FormContent>
        <label htmlFor="firstname">
          Prénom :<br />
          <input
            className={`input ${errors.firstname && 'is-danger'}`}
            type="firstname"
            name="firstname"
            onChange={handleChange}
            value={values.firstname || ''}
            required
          />
          {errors.firstname && (
            <p className="help is-danger">{errors.firstname}</p>
          )}
        </label>
        <label htmlFor="lastname">
          Nom :<br />
          <input
            className={`input ${errors.lastname && 'is-danger'}`}
            type="lastname"
            name="lastname"
            onChange={handleChange}
            value={values.lastname || ''}
            required
          />
          {errors.lastname && (
            <p className="help is-danger">{errors.lastname}</p>
          )}
        </label>
        <label htmlFor="phone">
          Téléphone :<br />
          <input
            className={`input ${errors.phone && 'is-danger'}`}
            type="phone"
            name="phone"
            onChange={handleChange}
            value={values.phone || ''}
            required
          />
          {errors.phone && <p className="help is-danger">{errors.phone}</p>}
        </label>
        <label htmlFor="email">
          Email :<br />
          <input
            autoComplete="off"
            className={`input ${errors.email && 'is-danger'}`}
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            required
          />
          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </label>
        <label htmlFor="message">
          Votre message :
          <textarea
            autoComplete="off"
            className={`input ${errors.message && 'is-danger'}`}
            id="message"
            name="message"
            onChange={handleChange}
            value={values.message || ''}
            required
          />
          {errors.message && <p className="help is-danger">{errors.message}</p>}
        </label>
      </FormContent>
      <Button
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
    </Form>
  );
};

export default ContactForm;
