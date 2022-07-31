import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './routes/home';
import GgComponents from './routes/NotFound';
import { PostsPage } from './routes/posts';
import { ProfilePage } from './routes/profile';
import {HeaderPage} from './routes/header'
import {PodcastsPage} from './routes/podcast'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
      <Route path='/header' element={<HeaderPage />} />
	  <Route path='/podcast' element={<PodcastsPage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/profile' element={<ProfilePage />} />
			<Route path='/*' element={<GgComponents.Gg404Page />} />
		</Routes>
	</BrowserRouter>
	
);

reportWebVitals();
