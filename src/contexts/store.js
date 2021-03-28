import React, { createContext } from 'react';

const StoreContext = createContext();

function StoreProvider({ children }) {

  const initialStore = {};
  
  return (
    <StoreContext.Provider value={initialStore}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider};