import React from 'react';
import { Outlet } from 'react-router-dom';

export const Main: React.FC = () => {
  return (
    <div>
      <nav>
        <p>{/* <Link to="/funcionario">Funcionario</Link> */}</p>
        <p>{/* <Link to="/holerite">Holerite</Link> */}</p>
      </nav>
      <Outlet />
      <p>Footer</p>
      <button type="button">Login</button>
    </div>
  );
};
