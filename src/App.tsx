import React from 'react';
import Router from './routing/Router';
import LayoutProvider from './providers/LayoutProvider';

function App() {
  return (
    <LayoutProvider>
      {Router.render()}
    </LayoutProvider>
  );
}

export default App;
