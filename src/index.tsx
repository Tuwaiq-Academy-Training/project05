import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeBLogin } from './routes/HomeBLogin';
import { LoggedinH } from './routes/LoggedinH';
import { LoginPage } from './routes/Login';
import { PodcastPage } from './routes/Pdcast';
import { VideoPage,  } from './routes/Video';
import { TagPage } from './routes/tag';
import { ProfilePage } from './routes/Profile';
import { CreatePostPage } from './routes/CreatePost';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
		<Routes>
			<Route path='/' element={<HomeBLogin />} />
			<Route path='/loggedin' element={<LoggedinH />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/podcast' element={<PodcastPage />} />
			<Route path='/loggedin/video' element={<VideoPage />} />
      <Route path='/tag' element={<TagPage />} />
      <Route path='/create' element={<CreatePostPage />} />
      <Route path='/profile' element={<ProfilePage />} />
		</Routes>
	</BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
