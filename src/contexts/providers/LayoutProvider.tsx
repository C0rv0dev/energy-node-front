import React, { useMemo, useState } from 'react';
import LayoutContext from '../LayoutContext';
import MiniDrawer from '../../resources/views/layout/Sidebar';

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
      <MiniDrawer>
        {children}
      </MiniDrawer>
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
