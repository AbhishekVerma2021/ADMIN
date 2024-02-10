import {
  validateToken,
} from '../../Redux/action';

export const mapStateToProps = (state) => ({
  isUserLoggedIn: state.isUserLoggedIn,
});

export const mapDispatchToProps = (dispatch) => ({
  validateToken: (navigate, componentPath) => dispatch(validateToken(navigate, componentPath)),
});