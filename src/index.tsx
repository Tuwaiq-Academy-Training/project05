import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/login';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/home';
import { PodcastPage } from './routes/Podcast';
import { PostsPage } from './routes/posts';
import { TagsPage } from './routes/Tags';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/post' element={<PostsPage />} />
			<Route path='/tags' element={<TagsPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/podcast' element={<PodcastPage />} />

		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
