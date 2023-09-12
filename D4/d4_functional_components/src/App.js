/*
  I componenti funzione non hanno bisogno di metodi render
  La manipolazione dello stato è rilegata agli hooks e allo useState

*/

import React from'react';
import Main from './components/main/Main';
import Counter from './components/counter/Counter';
import LifeCycles from './components/lifeCycles/LifeCycles';

function App() {
  return (
    <>
      <LifeCycles />
    </>
  )
}

export default App;
