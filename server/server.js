import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './store';

export const LOGIN_POST='LOGIN_POST';
export const SIGNUP_POST='SIGNUP_POST';
export const HOLIDAY_POST='HOLIDAY_POST';
export const LEFTDAY='LEFTDAY';
export const MILNUM='MILNUM';
export const GETCON='GETCON';

export const login_post=(email,password) => ({ type: LOGIN_POST ,email:email,password:password});
export const signup_post=() => ({ type: SIGNUP_POST ,email:email,password:password,milnum:minul});
export const holiday_post=(start) => ({ type: HOLIDAY_POST,start:start ,end:end,milnum:minul});
export const milnum=()=>({type:MILNUM});
export const leftday=()=>({type:LEFTDAY});
export const getcon=()=>({type:GETCON});

const initialState = {
	email:'',
	password:'',
	start:'',
	end:'',
	milnum:'',
	leftday:'',
	contry:'',
	signup:{}
};

export default function reducer(state = initialState, action) {

  switch(action.type) {
		  
    case LOGIN_POST:
      return { 
		  email:action.email
	  };
	case SIGNUP_POST:
		  return {
			  signup:{
				  ...initialState.signup,
				  signup:action.signup
			  }		  
		  };
	case HOLIDAY_POST:
	  return {
		  start:action.start,
		  end:action.end
	  };
	case GETCON:
		  return{
			  signup:{
				  ...initialState.signup,
				  con:action.signup
			  }		  
		  };
	case MILNUM:
		  return {
			  milnum:action.SetMILnum
		  };
	case LEFTDAY:
		  return {
			  leftday:action.getLeftDay
		  };
		 
    default:
      return state; 
  }
}