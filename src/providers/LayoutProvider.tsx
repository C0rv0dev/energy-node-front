import React, { useMemo, useState } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import Sidebar from '../resources/layout/Sidebar';

interface Props {
  children: React.ReactNode;
}

function LayoutProvider({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toogleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const value = useMemo(() => ({ showSidebar, toogleSidebar }), [showSidebar]);

  return (
    <LayoutContext.Provider value={value}>
      <Sidebar>
        {children}
      </Sidebar>
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
