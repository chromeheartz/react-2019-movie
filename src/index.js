import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// ReactDOM.render(<App /><Potato />, document.getElementById('root'));
/*
  이것이 안되는 이유는 react application이 하나의 component만을 rendering해야하기 때문이다.
  그 component가 App이다.
*/
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);