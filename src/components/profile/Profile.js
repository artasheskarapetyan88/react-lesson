import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import c from './Profile.module.css';

function Profile() {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;