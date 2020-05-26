import React from 'react';
import './App.css';
import NewsApi from './components/NewsApi';
import BackendApi from './components/BackendApi';

function App() {
  return (
    <div className="App">
      <NewsApi />
      <BackendApi />
    </div>
  );
}

export default App;
