import {
  handleLogin,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, passsword, navigate) => dispatch(handleLogin(email, passsword, navigate)),
});

export const mapStateToProps = (state) => ({

});