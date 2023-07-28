import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import ProfileFooter from './ProfileFooter';
import Left from '../Left/Left';
import Right from '../Right/Right';

function Profile() {
  return (
    <>
      <Left />
        <div className="ProfileContainer">
          <ProfileHeader/>
          <ProfilePosts/>
          <ProfileFooter/>
        </div>
      <Right/>
    </>
  );
};

export default Profile;
