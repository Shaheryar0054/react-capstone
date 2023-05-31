import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

jest.mock('../features/jobsSlice', () => ({
  fetchJobs: jest.fn().mockResolvedValue(),
}));

// Define mockDispatch in the outer scope so it's available in your tests
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

// Create the mock store
const mockStore = configureMockStore();
const store = mockStore({
  jobs: {
    jobs: [
      // Mock jobs data here
      {
        title: 'Job 1',
        company_name: 'company 1',
      },
      {
        title: 'Job 2',
        company_name: 'company 2',
      },
      {
        title: 'Job 3',
        company_name: 'company 3',
      },
    ],
    status: 'idle',
  },
});

describe('App', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockDispatch.mockClear();
  });

  test('renders JobList component when at / route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(mockDispatch).toHaveBeenCalled();
  });

  // rest of your tests...
});
