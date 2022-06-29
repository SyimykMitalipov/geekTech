import React from 'react'
import { Route } from 'react-router-dom'
import { useStyles } from './style'
const Progress = () => {
  const classes = useStyles()
  const list = [1,2,3,4,5,6,7,8,9]
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.mainPage}>
          <div className={classes.container}>
              <div className={classes.mainText}>
                <h1>Успеваемость студента</h1>
              </div>
          </div>
        </div>
        <div className={classes.progressTab}>
            <div className={classes.container}>
            <div className={classes.tabDes}>
            <div className={classes.desList}>
              <p>ФИО</p>
            </div>
            <div style={{
              marginLeft: '10px'
            }} className={classes.desListItem}>
              <p>1 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>2 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>3 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>4 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>5 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>6 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>7 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>8 ЗАНЯТИЕ</p>
            </div>
          </div>
          {list.map((item, idx) => <div className={classes.tabList}>
            <div className={classes.tabName}>
              <p>Айдана Нурланбекова</p>
            </div>
              <div style={{
                marginLeft: '10px'
              }} className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
          </div>

          )}
          
          </div>
        </div>
        <div className={classes.progressTab}>
            <div className={classes.container}>
            <div className={classes.tabDes}>
            <div className={classes.desList}>
              <p>ФИО</p>
            </div>
            <div style={{
              marginLeft: '10px'
            }} className={classes.desListItem}>
              <p>1 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>2 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>3 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>4 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>5 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>6 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>7 ЗАНЯТИЕ</p>
            </div>
            <div className={classes.desListItem}>
              <p>8 ЗАНЯТИЕ</p>
            </div>
          </div>
          {list.map((item, idx) => <div className={classes.tabList}>
            <div className={classes.tabName}>
              <p>Айдана Нурланбекова</p>
            </div>
              <div style={{
                marginLeft: '10px'
              }} className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
              <div className={classes.tabLesson}>
                <p>присутствовал</p>
              </div>
          </div>

          )}
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Progress