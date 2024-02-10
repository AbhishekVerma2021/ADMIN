import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authImage from '../../Images/auth.svg';
import './ProtectedRoute.css';
import { CircularProgress } from '@mui/material';

const ProtectedRoute = (props) => {
  const { Component, validateToken, isUserLoggedIn, componentPath } = props;
  const [shouldRender, setShouldRender] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoader(false), 2000)
    const fetchData = async () => {
      try {
        await validateToken(navigate, componentPath);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])


  useEffect(() => {
    setShouldRender(isUserLoggedIn)
  }, [isUserLoggedIn])
  return (<>
    {isUserLoggedIn ? <Component /> :
      <div>
        {loader ? <div className='circularLoader'>
          <CircularProgress />
        </div> :
          <div className='errorContainerMaster'>
            <img src={authImage} alt="" />
            <div className="messageNoAuth">
              <p style={{ color: 'red' }}>You are not authenticated!!!</p>
              <p>Please <Link className='linkToLogin' to='/authentication/sign-in'>Login</Link></p>
            </div>
          </div>}
      </div>
    }
  </>)
}

export default ProtectedRoute;