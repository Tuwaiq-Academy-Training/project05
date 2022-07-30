import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';
import { Profile } from './Pages/Profile';
import { NotFoundPage } from './componets/NotFound';
import { Post } from './componets/Post';
import { Posts } from './Pages/posts';
import { CreatePostPage } from './Pages/CreatePost';
import { Tags } from './Pages/Tags';
import { Podcasts } from './Pages/Podcast';
import { VidoePage } from './Pages/Vidoe';
import { EditeProfile } from './Pages/EditeProfil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
