import React from 'react';

import AppContainer from './containers/AppContainer';

import { LayoutProvider, StoreProvider } from '../src/contexts';

function App() {
  return (
    <LayoutProvider>
      <StoreProvider>
        <AppContainer />
      </StoreProvider>
    </LayoutProvider>
  );
}

export default App;
