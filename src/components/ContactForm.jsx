import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  const Title = styled.h2`
    text-align: center;
  `;

  const UserCategory = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
  `;

  const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
  `;

  const Button = styled.input`
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
  `;
  return (
    <form onSubmit="handleSubmit">
      <Title>Contactez-nous</Title>
      <UserCategory>
        <select type="select">
          <name>who are you ?</name>
          <option>user</option>
          <option>organiser</option>
          <option>sponsor</option>
        </select>
      </UserCategory>
      <FormContent>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </FormContent>

      <Button
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
    </form>
  );
};
export default ContactForm;
