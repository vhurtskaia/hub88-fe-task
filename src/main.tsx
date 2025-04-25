import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { client } from '@/apollo/client.ts';
import { store } from '@/app/store';

import App from '@/App.tsx';

import './index.css';

const root = document.getElementById('root') as HTMLElement;

createRoot(root!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>,
);
