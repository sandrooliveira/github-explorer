import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explorer GitHub repositories</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img src="https://avatars3.githubusercontent.com/u/6620074?s=460&u=3b786481319920f03b37156f1a7e9ab92d47f9ca&v=4" alt="Sandro Oliveira"></img>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20}></FiChevronRight>
        </a>

        <a href="test">
          <img src="https://avatars3.githubusercontent.com/u/6620074?s=460&u=3b786481319920f03b37156f1a7e9ab92d47f9ca&v=4" alt="Sandro Oliveira"></img>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20}></FiChevronRight>
        </a>

        <a href="test">
          <img src="https://avatars3.githubusercontent.com/u/6620074?s=460&u=3b786481319920f03b37156f1a7e9ab92d47f9ca&v=4" alt="Sandro Oliveira"></img>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20}></FiChevronRight>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
