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
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('Body'); // 기본은 Body.js

  const handleMenuButtonClick = (screen) => {
    setCurrentScreen(screen);
  };

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
    setCurrentScreen('Body'); // 작성 후 Body 화면으로 전환
  };

  return (
    <div className='AppContainer'>
      <Left onMenuButtonClick={handleMenuButtonClick} />
      {currentScreen === 'Body' && <Body />}
      {currentScreen === 'Search' && <Search />}
      {currentScreen === 'Profile' && <Profile />}
      {currentScreen === 'Write' && <Write onPostSubmit={handlePostSubmit} />}
      <Right onMenuButtonClick={handleMenuButtonClick}/>
    </div>
  );
}

export default App;
