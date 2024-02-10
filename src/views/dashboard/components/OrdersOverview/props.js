import {
  testingAction,
} from '../../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  testingAction: (flag) => dispatch(testingAction(flag))
});

export const mapStateToProps = (state) => ({
  dummyState: state.dummyState,
});