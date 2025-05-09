import React, { createContext, useState } from 'react';

export const DetailsContext = createContext();

export function DetailsProvider({ children }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <DetailsContext.Provider value={{ showDetails, setShowDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}