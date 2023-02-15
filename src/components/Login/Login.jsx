import React from "react";
import {useForm} from 'react-hook-form'
import { connect } from "react-redux";
import { Navigate, redirect } from "react-router-dom";
import { loginThunkCreator } from "../../redux/authReducer";

const LoginForm = (props) => {

const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
          email: '',
          password: '',
          rememberMe : false,
        }
      });


  
  return (

    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <input {...register('email')} type="text" placeholder="email" />
      </div>
      <div>
        <input {...register('password')} type="text" placeholder="password" />
      </div>
      <div>
        <input type="checkbox" name="" id="" /> remember me
      </div>
      <div>
        <button type="submit">login</button>
      </div>
      </form>
  );
};


const Login = (props) => {
    const onSubmit = (data) => {
        props.login(data)
    }
    if (props.isAuth) {
        return  <Navigate to='/profile' />
    }
    return (<div>
      <h1>Login</h1>
      <LoginForm  onSubmit = {onSubmit}/>
        </div>
    );
  };

  const mapStateToProps = (state) =>( {
isAuth : state.auth.isAuth
  })

//   connect(({ , lastName }) => ({ firstName, lastName }), updateAction)(YourForm)
export default connect (mapStateToProps, {login : loginThunkCreator}) (Login);

  