import React from 'react';
import './App.css';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import './styles/index.css';
import './styles/post.css';
function App() {
  return (
    <>
     <Navbar/>
     <div className='flex'>
     <Sidebar/>
     <div className='container'>
      <Content/>
    </div>
     </div>
    </>
  );
}

export default App;
