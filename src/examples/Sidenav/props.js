import {

} from '../../Redux/action';

export const mapStateToProps = (state) => ({ isUserLoggedIn: state.isUserLoggedIn });

export const mapDispatchToProps = (dispatch) => ({});