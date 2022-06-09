import React from 'react';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Modal } from "@mui/material";
import Button from "@mui/material";
import Typography from "@mui/material";
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
const Header = () => {
  const classes = useStyles();
  const [y, setY] = useState(100);
  const [display, setDisplay] = useState('none');
  const [color, setColor] = useState('#002244');
  const [text, setText] = useState('');
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setDisplay('transparent');
      setColor('#002244');
      setText('#ffffff');
    } else if (y < window.scrollY) {
      setDisplay('#002244');
      setColor('#ffffff');
      setText('#000000');
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener('scroll', (e) => handleNavigation(e));
  }, []);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 350,
  backgroundColor: '#0D0D0D',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  paddingTop: 5,
  // paddingBottom: 10 
};
  return (
    <>
      <div
        className={classes.header}
        style={{
          background: display,
        }}>
        <div className={classes.container}>
          <div className={classes.headerBlocks}>
            <Link
              style={{
                textDecoration: 'none',
                color: '#ffffff',
              }}
              to="/">
              <div className={classes.logo}>
                <img src={logo} width="50" height="50" alt="" />
                <p>GeekStudy</p>
              </div>
            </Link>

            <div className={classes.headerLinks}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                }}
                to="/">
                <p>Главная</p>
              </Link>
              {/* <p>Курсы</p> */}
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                }}
                to="/table">
                <p>расписание</p>
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                }}
                to="/progress">
                <p>успеваемость </p>
              </Link>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                }}
                to="/test">
                <p>тестирование</p>
              </Link>
              <button
                style={{
                  backgroundColor: color,
                  color: text,
                }} onClick={handleOpen}>
                Войти
              </button>
            </div>
          </div>
        </div>
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <Box sx={style} className={classes.modalBox}>
          <CloseIcon style={{
            color: '#ffffff',
            position: 'absolute',
            right: 0,
            top: 0,
            marginTop: '15px',
            marginRight: '15px',
            cursor: 'pointer'
          }}  
          onClick={handleClose}
          />
          <h3>Выберите типа авторизации</h3>
          <Link to="/signin"
          style={{
            textDecoration: 'none',
            color: '#ffffff'
          }}
          >
         <button onClick={handleClose} >Преподаватель</button>

          </Link>
          <Link to="/signstudent"
          style={{
            textDecoration: 'none',
            color: '#ffffff'
          }}
          >
         <button onClick={handleClose}>Студент</button>
          </Link>
        </Box>
      </Modal>
    </div>
      </div>
    </>
  );
};

export default Header;
