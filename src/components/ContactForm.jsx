import React, { useState } from 'react';
import styled from 'styled-components';

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
          <name>who are you ?</name>
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
          Votre message :<br />
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

const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
  margin: 0;
`;

const UserCategory = styled.div`
  width: 45px;
  height: 50px;
  display: flex;
  justify-content: flex-start;

  select {
    background-color: #fff3f0;
    border-radius: 10px;
  }
`;

const Form = styled.form`
  margin-top: 25%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  background-color: #86bbd8;
  padding: 50px;
  border-radius: 15px;
  width: 50%;
  height: 50%;
  text-align: center;
`;

const Button = styled.input`
  width: 60%;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 5%;
  background-color: #f06e96;
  border-radius: 10px;
  font-size: 20px;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  Label {
    margin-top: 1.5%;
  }

  input {
    margin-top: 5px;
    width: 80%;
    height: 40px;
    border-radius: 5px 10px 0 5px;
  }

  textarea {
    margin-top: 5px;
    width: 80%;
    height: 150px;
    border-radius: 5px 10px 0 5px;
  }
`;

export default ContactForm;
