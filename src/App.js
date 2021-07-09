import './App.css';

import React, {useState} from 'react';

import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

import NameContext from './context/NameContext';

function App() {
  const [name, setName] = useState("Joe Smith");

  return (
    <NameContext.Provider value={{name, setName}}>
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
      </Wrapper>
    </NameContext.Provider>
  );
}

export default App;
