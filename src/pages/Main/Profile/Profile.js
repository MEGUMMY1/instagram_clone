import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import ProfileFooter from './ProfileFooter';

function Profile() {
  return (
    <div className="ProfileContainer">
      <ProfileHeader/>
      <ProfilePosts/>
      <ProfileFooter/>
    </div>
  );
};

export default Profile;
