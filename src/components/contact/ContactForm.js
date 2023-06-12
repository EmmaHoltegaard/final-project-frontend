import React, { useState } from 'react';
import { BASE_URL } from 'utils/urls';

export const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...')
    const { name, email, phone, pronouns, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      pronouns: pronouns.value,
      message: message.value
    };
    const response = await fetch(`${BASE_URL}contact`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(details)
    });
    setStatus('Submit');
    const result = await response.json()
    alert(result.status)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Navn:
          <input id="name" type="text" required />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" required />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Telefon:
          <input id="phone" type="tel" />
        </label>
      </div>
      <div>
        <label htmlFor="pronouns">
          Foretrukne pronominer:
          <input id="pronouns" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="message">
          Hvad drejer henvendelsen sig om?:
          <textarea id="message" required />
        </label>
      </div>
      <button type="submit">{status}</button>
    </form>
  )
}