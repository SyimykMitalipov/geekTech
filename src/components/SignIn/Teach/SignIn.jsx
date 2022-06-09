import React from 'react'
import { useStyles } from './style'
import { useForm } from 'react-hook-form'
import { UserAuth } from '../../../context/AuthContext'
import { useState } from 'react'
const SignIn = () => {
  const classes = useStyles()
  const { logTeach } = UserAuth()
  const [ email , setEmail ] = useState()
  const [ password , setPassword ] = useState()
  const {register , handleSubmit , formState: {errors} , getValues }  = useForm()
  
  const setLogin = async (data) => {
    const {email , password} = data
    setEmail(email)
    setPassword(password)
    try{
      await logTeach(email , password)
    }catch(e){  
      console.log(e.message);
    }
  }
  return (
    <>
       <div className={classes.courseForm}>
          <div className={classes.container}>
            <div className={classes.formContainer}> 
            <h1>Войдите в аккаунт как учитель</h1>

            <form className={classes.form} onSubmit={handleSubmit((data) => {
              setLogin(data)
            })}>
            <input type='text' placeholder='Логин' {...register('email', {required: 'Это поле обязательно для заполнение'})} />
            <label style={{color: 'red'}}>{errors?.email?.message}</label>
            <input type="password" {...register('password' , {required: 'Пароль обязателен'})} placeholder='Пароль' />
            <label style={{color: 'red'}}>{errors?.password?.message}</label>
            {/* <input type="password" {...register('password2' , {required: 'Пароль нужно потвердить', validate: (value) => {
              const {password} = getValues()
              return password === value || 'Пароли не совпадают' 
            }})} placeholder='Потвердите пароль' />
            <label style={{color: 'red'}}>{errors?.password2?.message}</label> */}
            <button>Войти</button>
          </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignIn