import React from 'react';
import { Outlet } from 'react-router-dom';

const teste = '';

export const Main: React.FC = () => {
  return (
    <div>
      <nav>
        <p>{/* <Link to="/funcionario">Funcionario</Link> */}</p>
        <p>{/* <Link to="/holerite">Holerite</Link> */}</p>
      </nav>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};
