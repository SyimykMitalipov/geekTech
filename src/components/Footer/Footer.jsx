import React from 'react'
import { useStyles } from './style'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    const classes = useStyles()
  return (
    <>
    <div className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.footerLinks}>
            <p>Главная</p>
                {/* <p>Курсы</p> */}
                <p>расписание</p>
                <p>успеваемость </p>
                <p>тестирование</p>
            </div>
        </div>
        <div className={classes.footerLine}></div>
        <div className={classes.footerLogo}>
            <div className={classes.logoBlock}>
            <img src={logo} width="50" alt="" />
            <p>GeekStudy</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer