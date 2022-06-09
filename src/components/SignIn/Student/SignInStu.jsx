import React from 'react'
import { useStyles } from './style'
import { useForm } from 'react-hook-form'
const SignInStu = () => {
    const classes = useStyles()
  const {register , handleSubmit , formState: {errors} , getValues }  = useForm()

  return (
    <>
        <div className={classes.courseForm}>
          <div className={classes.container}>
            <div className={classes.formContainer}> 
            <h1>Войдите в аккаунт как Студент</h1>

            <form className={classes.form} onSubmit={handleSubmit((data) => {
              console.log(data);
            })}>
            <input type='text' placeholder='Логин' {...register('login', {required: 'Это поле обязателен'})} />
            <label style={{color: 'red'}}>{errors?.login?.message}</label>
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

export default SignInStu