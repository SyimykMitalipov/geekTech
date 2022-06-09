import React from 'react';
import { useStyles } from './style';
// import { useState } from 'react';
import { requester } from '../../requester';
import upload from '../../assets/upload.png'
import pen from '../../assets/pen.svg'
import user from '../../assets/user.svg'
import direct from '../../assets/direct.svg'
const Profile = () => {
  const classes = useStyles([]);
  const onInput = async (e) => {
    const files = [e.target.files[0]]

    try {
      const req =  await requester.patch('/api/v1/users/profile/' , { files })
      console.log(req);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.profileMain}>
          <input type="file" style={{display: 'none'}} accept='image/*' multiple="" id='file'  />
          <div className={classes.logo}>
            <label htmlFor='file'>
            <img width='300' height='300' src={upload} alt="" />
            <div className={classes.changePh}>
              <p>Изменить фото </p>
              <img src={pen} alt="" />
            </div>
            </label>
          </div>
          <div className={classes.aboutUser}>
            <div className={classes.name}>
              <div className={classes.role}>
                <img src={user} alt="" />
                <p>Студент</p>
              </div>
              <p className={classes.student}>Нурланбекова Айдана</p>
            </div>
            <div className={classes.direction}>
              <div className={classes.direct}>
                <img src={direct} alt="" />
                <p>Направление</p>
              </div>
                <p className={classes.directName}>Front-End разаботчик</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
