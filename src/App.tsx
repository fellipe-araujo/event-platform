import { Router } from './Router';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';

import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { Event } from './pages/Event';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
