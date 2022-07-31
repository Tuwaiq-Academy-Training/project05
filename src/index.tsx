import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
 import {NotfoundPage} from './routes/NotFound';
import './style/index.css';
import {LoginPage } from './routes/login';
import { RigPage } from './routes/rigester';
import { ProfilePage } from './routes/profile';
import { PostsPage } from './routes/posts';
import { ProdPage } from './routes/prodcast';
import { VidPage } from './routes/video';
import { TagPage } from './routes/taags';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
		<Route path='/*' element={<NotfoundPage/>} />
			<Route path='/login' element={<LoginPage/>} />
			<Route path='/Regester' element={<RigPage/>} />
			<Route path='/Profile' element={<ProfilePage/>} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/prodcast' element={<ProdPage />} />
			<Route path='/video' element={<VidPage />} />
			<Route path='/tags' element={<TagPage />} />

			
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


