import React, { useState } from "react";
import "./Write.css";
import Right from "../Right/Right";
import Left from "../Left/Left";

function Write({ onPostSubmit }) {
  const [newPost, setNewPost] = useState({ username: '', caption: '' });

  const handlePostInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (newPost.username && newPost.caption) {
      onPostSubmit(newPost);
      setNewPost({ username: '', caption: '' });
    }
  };

  return (
    <>
    <Left/>
      <div className="WriteContainer">
        <div className="write-form">
          <input
            type="text"
            name="username"
            placeholder="사용자 계정"
            value={newPost.username}
            onChange={handlePostInputChange}
            className="write-input-user"
          />
          <input
            type="text"
            name="caption"
            placeholder="게시글 내용"
            value={newPost.caption}
            onChange={handlePostInputChange}
            className="write-input-caption"
          />
          <button className="write-button" onClick={handleSubmit}>작성</button>
        </div>
      </div>
    <Right/>
    </>
  );
}

export default Write;
