import React from 'react';
import { Navigation } from './app/screens/Navigation';
import { LangState } from './app/context/LangContext';

const App = () => {

  return (
    <LangState>
      <Navigation />
    </LangState>
  );
}

export default App;