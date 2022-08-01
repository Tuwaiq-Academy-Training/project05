import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/login';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/home';
import { TagsPage } from './routes/profile';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/tags' element={<TagsPage />} />
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

reportWebVitals();
