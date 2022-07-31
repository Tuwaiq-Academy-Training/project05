import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ProfilePage } from './routes/profile';
import {NotfoundPage} from './routes/notfound';
import { PostsPage } from './routes/posts';
import { LoginPage } from './routes/login';
import './styles/index.css';
import { RegisterPage } from './routes/register';
import Prodcasts from './components/Prodcasts';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>build

			
      <Route path='/profile' element={<ProfilePage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/*' element={<NotfoundPage />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      <Route path='/Prodcasts' element={<Prodcasts/>}/>
		</Routes>
	</BrowserRouter>
	// <React.StrictMode>

	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
