import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}


const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/6620074?s=460&u=3b786481319920f03b37156f1a7e9ab92d47f9ca&v=4" alt="Rocketseat" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdasdasd">
          <div>
            <strong>asasd</strong>
            <p>asdasd</p>
          </div>

          <FiChevronRight size={20}></FiChevronRight>
        </Link>
      </Issues>
    </>
  );
}

export default Repository;
