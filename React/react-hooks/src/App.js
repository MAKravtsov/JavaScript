import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import Alert from './alert/Alert';
import { AlerProvider } from './alert/AlertContext';
import './App.css';
import Main from './Main';

function App() {
  return (
    <AlerProvider>
      <Alert/>
      <Main toggle={() => {}}/>
    </AlerProvider>
  );
}

export default App;
