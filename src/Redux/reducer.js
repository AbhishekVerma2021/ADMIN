import {
  USER_CREATE_PENDING, USER_CREATE_FULFILLED, USER_CREATE_REJECTED,
  LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED,
  GET_ALL_USERS_PENDING, GET_ALL_USERS_FULFILLED, GET_ALL_USERS_REJECTED,
  DISABLE_USER_PENDING, DISABLE_USER_FULFILLED, DISABLE_USER_REJECTED,
  ENABLE_USER_PENDING, ENABLE_USER_FULFILLED, ENABLE_USER_REJECTED, CLEAR_PLANS_REJECTED, CLEAR_PLANS_FULFILLED, CLEAR_PLANS_PENDING, LIST_PLANS_PENDING, LIST_PLANS_FULFILLED, LIST_PLANS_REJECTED, ADD_PLAN_PENDING, ADD_PLAN_FULFILLED, ADD_PLAN_REJECTED, FETCH_PLAN_INFO_PENDING, FETCH_PLAN_INFO_FULFILLED, FETCH_PLAN_INFO_REJECTED, DELETE_PLAN_PENDING, DELETE_PLAN_FULFILLED, DELETE_PLAN_REJECTED, MODIFY_PLAN_PENDING, MODIFY_PLAN_FULFILLED, MODIFY_PLAN_REJECTED, ENABLE_USER_SUBSCRIPTION_PENDING, ENABLE_USER_SUBSCRIPTION_FULFILLED, ENABLE_USER_SUBSCRIPTION_REJECTED, VALIDATE_TOKEN_FULFILLED, VALIDATE_TOKEN_PENDING, GET_REFRESH_TOKEN_REJECTED, VALIDATE_TOKEN_REJECTED, GET_REFRESH_TOKEN_FULFILLED, GET_REFRESH_TOKEN_PENDING, SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED, GET_ALL_HOTELS_PENDING, GET_ALL_HOTELS_FULFILLED, GET_ALL_HOTELS_REJECTED, GET_ALL_REVIEWS_REJECTED, GET_ALL_REVIEWS_FULFILLED, GET_ALL_REVIEWS_PENDING, GET_ALL_PLANS_PENDING, GET_ALL_PLANS_FULFILLED, GET_ALL_PLANS_REJECTED, GET_USER_HOTEL_INFO_PENDING, GET_USER_HOTEL_INFO_FULFILLED, GET_USER_HOTEL_INFO_REJECTED, DISABLE_USER_SUBS_PENDING, DISABLE_USER_SUBS_FULFILLED, DISABLE_USER_SUBS_REJECTED, EDIT_PLAN_DETAILS_PENDING, EDIT_PLAN_DETAILS_FULFILLED, EDIT_PLAN_DETAILS_REJECTED
  // Import other action types
} from './actionTypes';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  user: null,
  users: [],
  isLoading: false,
  error: null,
  isUserLoggedIn: false,
  activeUserDetails: {},
  ussToken: '',
  refreshToken: '',
  allUsersData: [],
  allHotelsData: [],
  allReviewsData: [],
  isFullPageLoading: false,
  selectedUserHotelData: {},
  allPlansData: [],
  // other state properties
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_HOTELS_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      };
    };

    case GET_ALL_HOTELS_FULFILLED: {
      // console.log(action.payload)
      const data = action.payload;
      return {
        ...state,
        allHotelsData: data,
        isFullPageLoading: false,
      };
    };
    case GET_ALL_HOTELS_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };

    case GET_ALL_PLANS_PENDING: {
      // const data = action.payload;
      return {
        ...state,
        isFullPageLoading: true,
        // allPlansData: data,
      }
    };

    case GET_ALL_PLANS_FULFILLED: {
      // console.log(action.payload)
      const data = action.payload;
      // console.log(data)
      return {
        ...state,
        isFullPageLoading: false,
        allPlansData: data,
      }
    };
    case GET_ALL_PLANS_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
        // emailVerifyFlag: false,
      };
    };

    case GET_ALL_REVIEWS_PENDING: {
      return {
        ...state,
      }
    };

    case GET_ALL_REVIEWS_FULFILLED: {
      // console.log(action.payload)
      const data = action.payload;
      return {
        ...state,
        allReviewsData: data,
      }
    };
    case GET_ALL_REVIEWS_REJECTED: {
      return {
        ...state,
        emailVerifyFlag: false,
      }
    }

    case GET_ALL_REVIEWS_PENDING: {
      return {
        ...state,
      }
    };

    case SIGNUP_FULFILLED: {
      // console.log(action.payload)
      return {
        ...state,
        emailVerifyFlag: true,
      }
    };
    case SIGNUP_REJECTED: {
      return {
        ...state,
        emailVerifyFlag: false,
      }
    }
    case LOGIN_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      }
    }
    case LOGIN_FULFILLED: {

      const { user, resultMessage, accessToken, refreshToken } = action.payload;
      const { password, ...activeUserDetails } = user;
      if (accessToken) {
        localStorage.setItem('TOKEN', accessToken);
      }
      if (refreshToken) {
        localStorage.setItem('REFRESH_TOKEN', refreshToken);
      }
      // toast.success(resultMessage)
      return {
        ...state,
        activeUserDetails,
        ussToken: accessToken,
        refreshToken,
        isUserLoggedIn: true,
        isFullPageLoading: false,
      }
    };

    case LOGIN_REJECTED: {
      return {
        ...state,
        isUserLoggedIn: false,
        isFullPageLoading: false,
      };
    };
    case VALIDATE_TOKEN_PENDING: {
      return {
        ...state,
      }
    }
    case VALIDATE_TOKEN_FULFILLED: {
      const user = action.payload;
      // console.log(user);
      return {
        ...state,
        activeUserDetails: user,
        isUserLoggedIn: true,
      }
    }
    case VALIDATE_TOKEN_REJECTED: {
      toast.error('Not authenticated!!!');
      return {
        ...state,
        isUserLoggedIn: false,
      };
    };
    case GET_REFRESH_TOKEN_PENDING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_REFRESH_TOKEN_FULFILLED: {
      const { accessToken, refreshToken } = action.payload;
      // console.log(token)
      // console.log(action.payload)
      localStorage.setItem('TOKEN', accessToken);
      localStorage.setItem('REFRESH_TOKEN', refreshToken);
      toast.success('Recieved Refresh Token!!!')
      return {
        ...state,
      }
    }
    case GET_REFRESH_TOKEN_REJECTED: {
      toast.error(action.payload, {
        position: 'bottom-right'
      });
      return {
        ...state,
      }
    }
    case GET_ALL_USERS_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      }
    };
    case GET_ALL_USERS_FULFILLED: {
      const data = action.payload;
      return {
        ...state,
        allUsersData: data,
        isFullPageLoading: false,
      };
    };
    case GET_ALL_USERS_REJECTED: {
      console.log(action.payload);
      return {
        ...state,
        isFullPageLoading: false,
      };
    };
    case DISABLE_USER_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      }
    };
    case DISABLE_USER_FULFILLED: {
      const { data, _id } = action.payload;
      const { message } = data;
      const updatedUsers = state.allUsersData.map((user) => {
        if (user._id === _id) {
          user.isActivated = false;
        };
        return user;
      });
      toast.success(message);
      return {
        ...state,
        allUsersData: updatedUsers,
        isFullPageLoading: false,
      };
    };
    case DISABLE_USER_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };
    case ENABLE_USER_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      };
    };
    case ENABLE_USER_FULFILLED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };
    case ENABLE_USER_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };
    case DELETE_PLAN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PLAN_FULFILLED:
      // Optionally, remove the deleted plan from the state
      const updatedPlans = state.plans.filter(plan => plan.planId !== action.payload); // adjust according to your state structure
      return {
        ...state,
        loading: false,
        plans: updatedPlans,
      };
    case DELETE_PLAN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };



    case MODIFY_PLAN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case MODIFY_PLAN_FULFILLED:
      {
        const data = action.payload;
        return {
          ...state,
          loading: false,
          allPlansData: data,
        };
      }
    case MODIFY_PLAN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    case ENABLE_USER_SUBSCRIPTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ENABLE_USER_SUBSCRIPTION_FULFILLED:
      // Update your state as needed. This might involve adding the subscription to the user's list of subscriptions
      return {
        ...state,
        loading: false,
        subscriptions: [...state.subscriptions, action.payload], // Adjust according to your state structure
      };
    case ENABLE_USER_SUBSCRIPTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_USER_HOTEL_INFO_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      };
    };
    case GET_USER_HOTEL_INFO_FULFILLED: {
      const data = action.payload;
      return {
        ...state,
        selectedUserHotelData: data,
        isFullPageLoading: false,
      };
    };
    case GET_USER_HOTEL_INFO_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };

    case DISABLE_USER_SUBS_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      };
    };
    case DISABLE_USER_SUBS_FULFILLED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };
    case DISABLE_USER_SUBS_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
      };
    };

    case EDIT_PLAN_DETAILS_PENDING: {
      return {
        ...state,
        isFullPageLoading: true,
      };
    };
    case EDIT_PLAN_DETAILS_FULFILLED: {
      const { data, planId } = action.payload;
      const { updatedSubscription } = data;
      const updatedPlans = state.allPlansData.map(plan => {
        if(plan.priceId === planId) {
          return updatedSubscription;
        }
        return plan;
      });
      return {
        ...state,
        isFullPageLoading: false,
        allPlansData: updatedPlans,
      };
    };
    case EDIT_PLAN_DETAILS_REJECTED: {
      return {
        ...state,
        isFullPageLoading: false,
      }
    }
    // Add cases for other actions
    default:
      return state;
  }
};

export default userReducer;
