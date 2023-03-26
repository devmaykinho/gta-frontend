import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Main } from './main';

describe('MainComponent - unit test', () => {
  it('Should render main componente', () => {
    render(<Main />);

    expect(screen.getByRole('button'));
  });
});
