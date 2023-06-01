import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AllJobs from '../components/AllJobs';

const mockStore = configureStore();
const store = mockStore({
  jobs: {
    jobs: [
      { id: '1', company_name: 'Company 1', salary: '5000' },
      { id: '2', company_name: 'Company 2', salary: '6000' },
      { id: '3', company_name: 'Company 3' }, // salary not provided
    ],
  },
});

describe('AllJobs', () => {
  test('renders AllJobs component', () => {
    render(
      <Provider store={store}>
        <AllJobs />
      </Provider>,
    );

    expect(screen.getByText(/Location\/Salary Range/i)).toBeInTheDocument();
    expect(screen.getByText(/Company 1/i)).toBeInTheDocument();
    expect(screen.getByText(/5000/i)).toBeInTheDocument();
    expect(screen.getByText(/Company 2/i)).toBeInTheDocument();
    expect(screen.getByText(/6000/i)).toBeInTheDocument();
    expect(screen.getByText(/Company 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Salary not provided/i)).toBeInTheDocument();
  });
});
