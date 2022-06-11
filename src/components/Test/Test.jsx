import React from 'react';
import { useStyles } from './style';
const Test = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.mainPage}>
          <div className={classes.container}>
            <div className={classes.mainText}>
              <h1>Проверка знаний</h1>
            </div>
          </div>
        </div>
        <div className={classes.testPage}>
          <div className={classes.container}>
            <div className={classes.testDes}>
              <p>ТЕСТЫ</p>
            </div>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank'  rel='noreferrer'> 
              <div className={classes.testList}>
                <p>Тест первого месяца </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target="_blank" rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест второго месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank' rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест третьего месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank' rel="noreferrer">
              <div className={classes.testList}>
                <p>Тест четвертого месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank' rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест пятого месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform"  target='_blank' rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест шестого месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank' rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест седьмого месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank' rel="noreferrer">
              <div className={classes.testList}>
                <p>Тест восьмого месяца  </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target='_blank' rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест девятого месяца </p>
              </div>
            </a>
            <a className={classes.a} href="https://docs.google.com/forms/d/e/1FAIpQLScWYKrlqc_kGmOI46BUzeGoIeYYcMmLz1ttJWj5fCWOtkgFbw/viewform" target="_blank" rel='noreferrer'>
              <div className={classes.testList}>
                <p>Тест десятого месяца  </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
