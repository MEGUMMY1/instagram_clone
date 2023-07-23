import React from 'react';
import "./Profile.css"

function ProfileHeader() {
  const user = { 
    name: '사용자 계정',
    profileImage: 'https://i.pinimg.com/564x/e4/e2/56/e4e25602627fb925e01a55467a67bc96.jpg',
    bio: '사용자 소개',
    posts: 10, 
    followers: 100, 
    following: 50 
  };

  return (
    <div className="profile-header">
      <img src={user.profileImage} alt={user.name} className='profile-image'/>
      <div className='profile-info'>
        <span className='profile-name'>{user.name}</span>
        <span className='profile-bio'>{user.bio}</span>
        <div className='profile-stats'>
          <span className='profile-txt'>게시물 <b>{user.posts}</b>　　</span>
          <span className='profile-txt'>팔로워 <b>{user.followers}</b>　　</span>
          <span className='profile-txt'>팔로잉 <b>{user.following}</b> </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
