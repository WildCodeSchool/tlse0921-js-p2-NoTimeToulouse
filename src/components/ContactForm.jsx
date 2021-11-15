import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const UserCategory = styled.div`
  width: 20%;
  align-self: flex-start;
`;

const Form = styled.form`
  margin-top: 25%;
  padding: 1em;
  background-color: #86bbd8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-top: 1.5em;
    width: 80%;
  }
  input {
    margin-top: 5px;
    width: 100%;
    border: 0;
    height: 40px;
    border-radius: 5px;
  }

  textarea {
    margin-top: 5px;
    width: 100%;
    height: 150px;
    border: 0;
    border-radius: 5px;
  }
`;
const Button = styled.input`
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
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setFirstname('');
    setLastname('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <Form>
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
            type="text"
            id="firstname"
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            autoComplete="off"
            required
          />
        </label>
        <label htmlFor="lastname">
          Nom :<br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            autoComplete="off"
            required
          />
        </label>
        <label htmlFor="phone">
          Téléphone :<br />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </label>
        <label htmlFor="email">
          Email :<br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label htmlFor="message">
          Votre message :
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
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
