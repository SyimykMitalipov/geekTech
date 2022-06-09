import React from 'react';
import { useStyles } from './style';
const Table = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.table}>
        <div className={classes.mainPage}>
          <div className={classes.container}>
            <div className={classes.mainTxt}>
              <h1>РАСПИСАНИЕ КУРСА</h1>
            </div>
          </div>
        </div>
        <div className={classes.tableLessons}>
          <div className={classes.container}>
            <div className={classes.tableDes}>
              <div className={classes.lessons}>
                <p>Занятия</p>
              </div>
              <div className={classes.themes}>
                <p>Темы</p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>1 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                  Вводная лекция. Знакомство, о курсе, главные плюсы и минусы данной профессии.
                  Организационные вопросы.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>2 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Основы графических программ. Пакет Adobe.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>3 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Тренды в дизайне. Эволюция в дизайне сквозь время. Все тренды дизайна по наше время.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>4 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Введение в Figma.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>5 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Подготовка к работе над лендингом, мудборды.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>6 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Главная страница. Первые шаги.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>7 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Работа со стилями. Создание GUI. Работа с цветом.
                </p>
              </div>
            </div>
            <div className={classes.tableRes}>
              <div className={classes.tableNum}>
                <p>8 УРОК</p>
              </div>
              <div className={classes.tableText}>
                <p>
                Основа композиции. Сетки bootstrap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
