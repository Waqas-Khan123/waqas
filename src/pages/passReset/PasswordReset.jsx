import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './passwordReset.module.css'
const PasswordReset = () => {
  let navigate=useNavigate()
  return (
    <div>
      <form action="#" className={style.form__container}>
          <h2 className={style.form__title}>Password Reset</h2>
          <p className={style.title__para}>
          Enter the email address associated with your account <br />
          and we’ll reset your password. 
          </p>
          <div className={style.input__main__container}>
            <p className={style.input__label}>Email Address</p>
            <div className={style.input__container}>
              <input type="email" className={style.input__field} placeholder='Email Address' />
              <br />
              <input type="text" className={style.input__field} placeholder='New Password' />
              <br />
              <input type="password" className={style.input__field} placeholder='Confirm Password' />
            </div>
            <div className={style.submit__container}>
              <input type="button" className={style.submit__btn} value={'Reset Password'} onClick={()=>{
navigate('/login')
              }}/>
            </div>
           
          </div>
        </form>
    </div>
  )
}

export default PasswordReset