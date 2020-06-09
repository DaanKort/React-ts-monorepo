import React from 'react';
import './App.css';
import '@myapp/package-a';
import { testInterface } from '@myapp/tspackage';

const test: testInterface = {
  works: true
}

console.log(test);

const App: React.FC = () => {
  return (
    <div className="App">
      WORKS
    </div>
  );
}

export default App;
