import React from 'react';
import { useStyles } from './style';
import js from '../../assets/js.png'
import swift from '../../assets/siwft.png'
import full from '../../assets/full.png'
import py from '../../assets/py.png'
import and from '../../assets/and.png'
import ux from '../../assets/ux.png'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'
import Header from '../Header/Header';
const MainPage = () => {
  const classes = useStyles();
  return (
    <>
        {/* <Header /> */}

      <div className={classes.wrapper}>
        <div className={classes.mainPage}>
          <div className={classes.container}>
            <h1>Образовательный центр Geektech</h1>
            <h2>С нуля до гарантированной стажировки <br/> в нашей IT-студии за 7 месяцев!</h2>
          </div>
        </div>
        <div className={classes.ourCourses}>
            <div className={classes.container}>
              <h2>Наши Курсы:</h2>
                <div className={classes.ourBlocks}>
                  <a style={{textDecoration: 'none'}} href="https://geektech.kg/frontend" target='_blank' rel="noreferrer">
                  <div className={classes.blockItem}>
                    <div className={classes.blockItemImg}>
                    <img src={js} alt="" />
                    </div>
                    <div className={classes.blockCourse}>
                      <p>Frontend - разработчик</p>
                    </div>
                    <div className={classes.blockRange}>
                      <p>Длительность: 5 месяцев</p>
                    </div>
                  </div>
                  </a>
                  <a style={{textDecoration: 'none'}} href="https://geektech.kg/ios" target='_blank' rel="noreferrer">
                  <div className={classes.blockItem}>
                    <div className={classes.blockItemImg}>
                    <img src={swift} alt="" />
                    </div>
                    <div className={classes.blockCourse}>
                      <p>iOS - разработчик</p>
                    </div>
                    <div className={classes.blockRange}>
                      <p>Длительность: 7 месяцев</p>
                    </div>
                  </div>
                  </a>
                  <a style={{textDecoration: 'none'}} href="https://geektech.kg/fullstack" target='_blank' rel="noreferrer">
                  <div className={classes.blockItem}>
                    <div className={classes.blockItemImg}>
                    <img src={full} alt="" />
                    </div>
                    <div className={classes.blockCourse}>
                      <p>FullStack - разработчик</p>
                    </div>
                    <div className={classes.blockRange}>
                      <p>Длительность: 10 месяцев</p>
                    </div>
                  </div>
                  </a>
                  <a style={{textDecoration: 'none'}} href="https://geektech.kg/backend" target='_blank' rel="noreferrer">
                    <div className={classes.blockItem}>
                    <div className={classes.blockItemImg}>
                    <img src={py} alt="" />
                    </div>
                    <div className={classes.blockCourse}>
                      <p>Backend - разработчик</p>
                    </div>
                    <div className={classes.blockRange}>
                      <p>Длительность: 5 месяцев</p>
                    </div>
                  </div>
                  </a>

                  <a style={{textDecoration: 'none'}} href="https://geektech.kg/android" target='_blank' rel="noreferrer">

                    <div className={classes.blockItem}>
                    <div className={classes.blockItemImg}>
                    <img src={and} alt="" />
                    </div>
                    <div className={classes.blockCourse}>
                      <p>Android - разработчик</p>
                    </div>
                    <div className={classes.blockRange}>
                      <p>Длительность: 7 месяцев</p>
                    </div>
                  </div>
                  </a>
                  
                  <a style={{textDecoration: 'none'}} href="https://geektech.kg/uxui" target='_blank' rel="noreferrer">
                    <div className={classes.blockItem}>
                    <div className={classes.blockItemImg}>
                    <img src={ux} alt="" />
                    </div>
                    <div className={classes.blockCourse}>
                      <p>UX/UI - дизайнер</p>
                    </div>
                    <div className={classes.blockRange}>
                      <p>Длительность: 3 месяца</p>
                    </div>
                  </div>
                  </a>
                  
                  
                </div>
            </div>
        </div>
        <div className={classes.courseForm}>
          <div className={classes.container}>
            <div className={classes.formContainer}> 
            <form className={classes.form}>
            <input type="email" placeholder='Логин'/>
            <input type="password" placeholder='Пароль' />

            <button>Войти</button>
          </form>
            </div>
          </div>
        </div>
        <div className={classes.socials}>
          <div className={classes.socNet}>
            <div className={classes.socItem}>
              <img width='70' height='70' src={facebook} alt="" />
            </div>
            <div className={classes.socItem}>
              <img width='70' height='70' src={youtube} alt="" />
            </div>
            <div className={classes.socItem}>
              <img width='70' height='70' src={instagram} alt="" />
            </div>
            <div className={classes.socItem}>
              <img width='70' height='70' src={telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
