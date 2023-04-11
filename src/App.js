import React, { useState } from 'react';
import UserInputs from './components/UserInputs';
import TaxAnalysis from './components/TaxAnalysis';
import TaxYearOverview from './components/TaxYearOverview';
import { TaxDataProvider } from './context/TaxDataContext';
import './App.css';

function App() {
  const [userInputs, setUserInputs] = useState({});

  const handleUserInputsChange = (inputs) => {
    setUserInputs(inputs);
  };

  return (
    <TaxDataProvider>
      <div className="appContainer">
        <div className="inputContainer">
          <UserInputs onUserInputsChange={handleUserInputsChange} />
        </div>
        <div className="taxComponentsContainer">
          <TaxAnalysis userInputs={userInputs} />
          <TaxYearOverview userInputs={userInputs} />
        </div>
      </div>
    </TaxDataProvider>
  );
}

export default App;