import React, { useState } from 'react';
import Signin from './pages/Signin/Signin';
import Login from './pages/Login/Login';
import Left from './pages/Main/Left/Left';
import Body from './pages/Main/Body/Body';
import Posts from './pages/Main/Body/Posts';
import Right from './pages/Main/Right/Right';
import Search from './pages/Main/Search/Search';
import Profile from './pages/Main/Profile/Profile';
import Write from './pages/Main/Write/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [posts, setPosts] = useState(Posts);

  const handlePostSubmit = (newPost) => {
    // 새로운 게시글을 게시글 목록에 추가
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const updatedPost = {
      ...newPost,
      id: newId,
      writerimg: 'https://i.pinimg.com/564x/d5/da/19/d5da1979675062ad58a044f5bc8075ea.jpg',
      image: 'https://i.pinimg.com/736x/1e/ac/eb/1eaceb352dbf3103236d560bd197b316.jpg',
      isLiked: false,
      likeCnt: 0,
      uploadDate: new Date().getTime(),
      comments: [],
    };
    setPosts([...posts, updatedPost]);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body posts={posts} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/search' element={<Search />} />
        <Route path='/write' element={<Write onPostSubmit={handlePostSubmit} />} />      
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
