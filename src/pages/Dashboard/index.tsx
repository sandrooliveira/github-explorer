import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explorer GitHub repositories</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Dashboard;
