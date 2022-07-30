import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './componets/NotFound';
import logo from './logo.svg';
import { CreatePostPage } from './Pages/CreatePost';
import { EditeProfile } from './Pages/EditeProfil';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';
import { Podcasts } from './Pages/Podcast';
import { Posts } from './Pages/posts';
import { Profile } from './Pages/Profile';
import { Tags } from './Pages/Tags';
import { VidoePage } from './Pages/Vidoe';
import './style/index.css';
import { devContext } from './utils/devContext';


function App() {

  const addPost = async (e: any) => {
    let post = JSON.parse(localStorage.getItem("IPost") || "[]")
    const profile = JSON.parse(localStorage.getItem('Profile') || "")
    e.preventDefault()
    const form = e.target
    const body = {
      id: '1',
      imageUrl: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=600',
      userAvatarUrl: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600',
      username: profile.name,
      title: form.elements.title.value,
      created_at: Date.now(),
      likeCount: 1,
      comments: [],
      content: form.elements.content.value,
      tags: form.elements.tag.value,
    }

    let array = [...post]
    array.push(body)
    // const Profile = {
    //   name: 'Essa',
    //   email: 'essa@gmail.com',
    //   username: 'essa433'
    // }

    localStorage.setItem("IPost", JSON.stringify(array))
    // localStorage.setItem("Profile", JSON.stringify(Profile))
    form.reset()
  }


  const editProfile = (e: any) => {
    e.preventDefault()
    const form = e.target
    const body = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      username: form.elements.username.value,
    }
    localStorage.setItem("Profile", JSON.stringify(body))
    form.reset()
  }


  const store = {

    addPost,
    editProfile

  }

  return (

    <devContext.Provider value={store}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/videos' element={<VidoePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit-profile' element={<EditeProfile />} />
        <Route path='/create-post' element={<CreatePostPage />} />
        <Route path='/tag' element={<Tags />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </devContext.Provider>

  );
}

export default App;
