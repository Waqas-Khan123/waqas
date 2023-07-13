import React from "react";
import style from "./forgotPassword.module.css";
import { useNavigate } from "react-router-dom";
// import ProfileCard from "./card/ProfileCard";
const ForgotPassword = () => {
 let navigate=useNavigate()
  return (
    <React.Fragment>
      <div>
        <form action="#" className={style.form__container}>
          <h2 className={style.form__title}>Forgot Your Password?</h2>
          <p className={style.title__para}>
            Enter the email address associated with your account <br />
            and we’ll send you a link to reset your password.
          </p>
          <div className={style.input__main__container}>
            <p className={style.input__label}>Email Address</p>
            <div className={style.input__container}>
              <input
                type="email"
                className={style.input__field}
                placeholder="Email Address"
              />
            </div>
            <div className={style.submit__container}>
              <input
                type="button"
                className={style.submit__btn}
                value={"Forgot Password"}
                onClick={()=>{navigate('/reset-password')}}
              />
            </div>
            <h5 className={style.backto__login}>
              Back to{" "}
              <a href="#" className={style.back__login}>
                log in
              </a>
            </h5>
          </div>
        </form>
      </div>
      {/* <ProfileCard /> */}
    </React.Fragment>
  );
};

export default ForgotPassword;
