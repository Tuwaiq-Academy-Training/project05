import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeftSidebar from './components/LeftSidebar';
import Navigation from './components/Navigation';
import ArticleComponent from './components/ArticleComponent';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navigation/> 
    
   <LeftSidebar/>
   <Content />
   
   
    </div>
  );
}

export default App;
