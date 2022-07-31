import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { FilterPage } from './components/Filter';
import {  HomePage } from './components/Home';
import { LoginPage } from './components/Login';
import { NotfoundPage } from './components/Notfound';
import { PodcastPage } from './components/Podcast';
import { ProfilePage } from './components/Profile';
import { SetingPage } from './components/Seting';
import { TagPage } from './components/Tags';
import { VideosPage } from './components/Video';


import reportWebVitals from './reportWebVitals';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
	 <BrowserRouter>
	 <Routes>
	  
	   <Route path="/" element={<HomePage />} />
	   <Route path="/seting" element={<SetingPage />} />
	   <Route path="/profile" element={<ProfilePage />} />
	   <Route path="/filter" element={<FilterPage />} />
	   <Route path="/podcast" element={<PodcastPage />} />
	   <Route path="/video" element={<VideosPage />} />
	   <Route path="/tags" element={<TagPage />} />
	   <Route path="/Login" element={<LoginPage />} />
	   
	   <Route path="/*" element={<NotfoundPage/>} />

	   

	 </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
