import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SinglePost from "./pages/SinglePost/SinglePost";
import Profile from "./pages/Profile/Profile";
import NewPost from "./pages/NewPost/NewPost";
import Podcast from "./pages/Podcast/Podcast";
import Tags from "./pages/Tags/Tags";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<NewPost />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/pod" element={<Podcast />} />
      <Route path="/tags" element={<Tags />} />
    </Routes>
  );
}

export default App;
