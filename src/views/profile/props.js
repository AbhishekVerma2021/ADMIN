import {
  getReviewsData,
} from '../../Redux/action';

export const mapStateToProps = (state) => ({
  allReviewsData: state.allReviewsData,
});

export const mapDispatchToProps = (dispatch) => ({
  getReviewsData: () => dispatch(getReviewsData()),
});