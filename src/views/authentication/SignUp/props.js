import {
  handleSignup,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  handleSignup: (email, password, name) => dispatch(handleSignup(email, password, name)),
});

export const mapStateToProps = (state) => ({
  
});