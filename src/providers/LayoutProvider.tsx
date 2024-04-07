import React, { useMemo, useState, useCallback } from 'react';
import LayoutContext from '../contexts/LayoutContext';

interface Props {
  children: React.ReactNode;
}

function LayoutProvider({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toogleSidebar = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);


  const value = useMemo(() => ({ showSidebar, toogleSidebar }), [showSidebar, toogleSidebar]);

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
