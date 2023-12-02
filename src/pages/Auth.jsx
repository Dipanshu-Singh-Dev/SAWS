import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styles from "../styles/Auth.module.css"
import { AuthContext } from '../context/AuthContext'
import Signin from '../components/Signin'
import Signup from "../components/Signup";
const baseURL = `https://saws-backend.onrender.com`;
const Auth = () => {
  return (
    <div id={styles.container}>
      <Signin />
      <Signup />
    </div>
  );
}

export default Auth;
