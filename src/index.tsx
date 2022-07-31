import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import {Login} from "./routes/Login/Login";
import {Home} from "./routes/Home/Home";
import { NewPost } from "./routes/NewPost/NewPost";
import {Podcast} from "./routes/Podcast/Podcast";
import {Profile} from "./routes/Profile/Profile";
import SinglePost from "./routes/SinglePost/SinglePost";
import Tags from "./routes/Tags/Tags";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new/posts" element={<NewPost />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/podcasts" element={<Podcast />} />
      <Route path="/tags" element={<Tags />} />
      <Route 
		path='*'
		element={
			<main style={{padding: '1rem'}}>
				<p>Page Not Found</p>

			</main>
		}
		/>
    </Routes>
          {/* <App /> */}

        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
