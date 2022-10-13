import React, { useState } from 'react';

import { List } from './components/List';
import { Button } from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <List />
      <Button />
    </div>
  );
}

export default App;
