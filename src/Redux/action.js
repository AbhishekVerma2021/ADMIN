// import Axios from 'axios';
import {
  USER_CREATE_PENDING, USER_CREATE_FULFILLED, USER_CREATE_REJECTED,
  LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED,
  GET_ALL_USERS_PENDING, GET_ALL_USERS_FULFILLED, GET_ALL_USERS_REJECTED,
  DISABLE_USER_PENDING, DISABLE_USER_FULFILLED, DISABLE_USER_REJECTED,
  EDIT_PLAN_DETAILS_PENDING,
  EDIT_PLAN_DETAILS_FULFILLED,
  EDIT_PLAN_DETAILS_REJECTED,
  ENABLE_USER_PENDING, ENABLE_USER_FULFILLED, ENABLE_USER_REJECTED, GET_ALL_PLANS_PENDING, GET_ALL_PLANS_FULFILLED, GET_ALL_PLANS_REJECTED, GET_ALL_REVIEWS_PENDING, GET_ALL_REVIEWS_FULFILLED, GET_ALL_REVIEWS_REJECTED, GET_USER_HOTEL_INFO_PENDING, GET_USER_HOTEL_INFO_FULFILLED, GET_USER_HOTEL_INFO_REJECTED, CLEAR_PLANS_PENDING, CLEAR_PLANS_FULFILLED, CLEAR_PLANS_REJECTED, ADD_PLAN_PENDING, ADD_PLAN_FULFILLED, ADD_PLAN_REJECTED, FETCH_PLAN_INFO_PENDING, FETCH_PLAN_INFO_FULFILLED, FETCH_PLAN_INFO_REJECTED, DELETE_PLAN_PENDING, DELETE_PLAN_FULFILLED, DELETE_PLAN_REJECTED, MODIFY_PLAN_PENDING, MODIFY_PLAN_FULFILLED, MODIFY_PLAN_REJECTED, ENABLE_USER_SUBSCRIPTION_PENDING, ENABLE_USER_SUBSCRIPTION_FULFILLED, ENABLE_USER_SUBSCRIPTION_REJECTED, GET_REFRESH_TOKEN_PENDING, GET_REFRESH_TOKEN_FULFILLED, GET_REFRESH_TOKEN_REJECTED, VALIDATE_TOKEN_REJECTED, VALIDATE_TOKEN_FULFILLED, VALIDATE_TOKEN_PENDING, GET_ALL_HOTELS_PENDING, GET_ALL_HOTELS_FULFILLED, GET_ALL_HOTELS_REJECTED, DISABLE_USER_SUBS_PENDING, DISABLE_USER_SUBS_FULFILLED, DISABLE_USER_SUBS_REJECTED,
  // Import other action types
} from './actionTypes';

const token = ''; // Define or fetch your token
import Axios from '../views/Services';


// User creation action
// export const getUserHotelData = (uid) => {
//   return (dispatch) => {
//     dispatch({ type: GET_USER_HOTEL_INFO_PENDING });
//     Axios.post('/admin/getuserbusinesseinfo', { uid })
//       .then(response => dispatch({ type: GET_USER_HOTEL_INFO_FULFILLED, payload: response.data }))
//       .catch(error => dispatch({ type: GET_USER_HOTEL_INFO_REJECTED, payload: error }));
//   };
// };


export const createUser = (uid) => {

}

export const handleSignup = () => {

};

// User login action
export const handleLogin = (email, password, navigate) => {
  // const navigate = useNavigate();
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING });
    Axios.post('/user/login', {
      email,
      password,
    })
      .then(res => {
        console.log(res);
        navigate('/dashboard');
        dispatch({ type: LOGIN_FULFILLED, payload: res.data })
      })
      .catch(er => {
        navigate('/authentication/sign-in')
        dispatch({ type: LOGIN_REJECTED, payload: er })
      })
  };
};

export const validateToken = (navigate, componentPath) => {
  // const token = localStorage.getItem('TOKEN');
  return (dispatch) => {
    dispatch({ type: VALIDATE_TOKEN_PENDING });
    Axios.get('/user/verify-token')
      .then(res => {
        dispatch({ type: VALIDATE_TOKEN_FULFILLED, payload: res.data });
        navigate(componentPath);
      })
      .catch(er => dispatch({ type: VALIDATE_TOKEN_REJECTED }))
  }
}

export const getAccessToken = () => {
  const data = {
    refreshToken: localStorage.getItem('REFRESH_TOKEN'),
  }
  console.log(data);
  return (dispatch) => {
    dispatch({ type: GET_REFRESH_TOKEN_PENDING })
    Axios.post('/user/refresh-token', data)
      .then(res => {
        dispatch({ type: GET_REFRESH_TOKEN_FULFILLED, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_REFRESH_TOKEN_REJECTED, payload: err });
      })
  }
};

// Get all users (admin)
export const getAllUsers = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_USERS_PENDING });
    Axios.get('/admin/allusers')
      .then(response => dispatch({ type: GET_ALL_USERS_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: GET_ALL_USERS_REJECTED, payload: error }));
  };
};

// Get all hotels
export const getAllHotels = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_HOTELS_PENDING });
    Axios.get('/admin/getallbusiness')
      .then(response => dispatch({ type: GET_ALL_HOTELS_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: GET_ALL_HOTELS_REJECTED, payload: error }));
  };
};

// Disable a user (admin)
export const disableUser = (uid) => {
  return (dispatch) => {
    dispatch({ type: DISABLE_USER_PENDING });
    Axios.post('/admin/disableuser', { uid })
      .then(response => dispatch({ type: DISABLE_USER_FULFILLED, payload: { data: response.data, _id: uid } }))
      .catch(error => dispatch({ type: DISABLE_USER_REJECTED, payload: error }));
  };
};

// Enable a user (admin)
export const enableUser = (uid) => {
  return (dispatch) => {
    dispatch({ type: ENABLE_USER_PENDING });
    Axios.post('/admin/enableuser', { uid })
      .then(response => dispatch({ type: ENABLE_USER_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: ENABLE_USER_REJECTED, payload: error }));
  };
};


export const editPlanDetails = (details) => {
  return (dispatch) => {
    dispatch({ type: EDIT_PLAN_DETAILS_PENDING });
    Axios.post('/admin/update-plan', details)
    .then((res) => dispatch({ type: EDIT_PLAN_DETAILS_FULFILLED, payload: res.data }))
    .catch((err) => dispatch({ type: EDIT_PLAN_DETAILS_REJECTED, payload: err}));
  };
};


export const getAllPlans = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PLANS_PENDING });
    Axios.get('/admin/getPlans')
      .then(res => {
        dispatch({ type: GET_ALL_PLANS_FULFILLED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_ALL_PLANS_REJECTED, payload: err });
      });
  };
};

export const disableUserSubscriptions = () => {
  return (dispatch) => {
    dispatch({ type: DISABLE_USER_SUBS_PENDING });
    Axios.post('/api/disableusersubscription', { uid })
      .then(res => dispatch({ type: DISABLE_USER_SUBS_FULFILLED, payload: res.data }))
      .catch(er => dispatch({ type: DISABLE_USER_SUBS_REJECTED, payload: er }));
  };
};


export const getAllReviews = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_REVIEWS_PENDING });
    Axios.get('/admin/getuserreviews')
      .then(res => {
        dispatch({ type: GET_ALL_REVIEWS_FULFILLED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_ALL_REVIEWS_REJECTED, payload: err });
      });
  };
};


export const getUserHotelData = (uid) => {
  return (dispatch) => {
    dispatch({ type: GET_USER_HOTEL_INFO_PENDING });
    Axios.post('/admin/getuserbusinesseinfo', { uid })
      .then(response => dispatch({ type: GET_USER_HOTEL_INFO_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: GET_USER_HOTEL_INFO_REJECTED, payload: error }));
  };
};

// Action to clear all plans


export const fetchPlanInfo = (planId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_PLAN_INFO_PENDING });
    Axios.post('http://localhost:3000/api/admin/planInfo', { planId })
      .then(response => dispatch({ type: FETCH_PLAN_INFO_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: FETCH_PLAN_INFO_REJECTED, payload: error }));
  };
};



export const modifyPlan = (planId, updates) => {
  return (dispatch) => {
    const { name, price, trialDays } = updates;
    dispatch({ type: MODIFY_PLAN_PENDING });
    Axios.post('/admin/update-plan', {
      name,
      price,
      trialDays,
      planId,
    }
    )
      .then(response => dispatch({ type: MODIFY_PLAN_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: MODIFY_PLAN_REJECTED, payload: error }));
  };
};

export const enableUserSubscription = (uid, planId) => {
  return (dispatch) => {
    dispatch({ type: ENABLE_USER_SUBSCRIPTION_PENDING });
    Axios.post('http://localhost:3000/api/admin/enableusersubscription', { uid, planId })
      .then(response => dispatch({ type: ENABLE_USER_SUBSCRIPTION_FULFILLED, payload: response.data }))
      .catch(error => dispatch({ type: ENABLE_USER_SUBSCRIPTION_REJECTED, payload: error }));
  };
};
// Add other action creators as needed

// export const getAccessToken = () => {
//   return (dispatch) => {

//   };
// };

export const handleHotelDetails = () => {
  return (dispatch) => {

  };
};


export const getReviewsData = () => {
  return (dispatch) => {

  };
};



// export const validateToken = () => {
//   return (dispatch) => {

//   };
// };

// export const handleLogin = () => {
//   return (dispatch) => {

//   };
// };

export const testingAction = () => {
  return (dispatch) => {

  };
};

export const deleteHotelData = () => {
  return (dispatch) => {

  };
};

