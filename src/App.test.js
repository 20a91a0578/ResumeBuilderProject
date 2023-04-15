import { render, screen } from '@testing-library/react';
import {Car,App} from './App';

test('renders learn react link', () => {
  render(<App />,<Car/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
