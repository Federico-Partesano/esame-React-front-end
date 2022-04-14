import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '../../hook/useSignIn';
import logo from "../../assets/rick.png";

import "./Signup.scss";
import { useSignUp } from '../../hook/useSignUp';

interface ISignup {

}

const Signup: FC<ISignup> = () => {
    const { error, callApi } = useSignUp();
    const navigate = useNavigate();
  
    const renderForm = () => {
      const handleSubmit = async (
        values: Record<"nickname" | "password", string>
      ) => {
        const resp = await callApi(values);
        console.log("resp", resp);
        if (resp) {
          resp && navigate("/login");
        }
      };
      return (
        <Formik
          initialValues={{ nickname: "", password: "" }}
          validate={(values) => {
            const errors: Record<string, string> = {};
            if (!values.nickname) {
              errors.nickname = "Required";
            }
            //    else if(values.nickname){
            //       console.log(values.nickname);
  
            //   }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              {error && <p className="error__text">{error}</p>}
              <div className="form__field">
                <Field type="text" name="nickname" placeholder="nickname..." />
                {/* <ErrorMessage name="email" /> */}
              </div>
  
              <div className="form__field">
                <Field type="password" name="password" placeholder="*******" />
              </div>
  
              <div className="form__field">
                <input type="submit" value="Sign up" disabled={isSubmitting} />
              </div>
            </Form>
          )}
        </Formik>
      );
    };
return (
    <>
    <div className="align">
      <div className="grid align__item">
        <div className="register">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg> */}
          <img src={logo} width={170} className="site__logo" />
          <h2>Sign Up</h2>
            {renderForm()}
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
    </>
    )
};

export default Signup;