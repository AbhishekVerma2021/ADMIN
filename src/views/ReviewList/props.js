import {
  getReviewsData,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getReviewsData: () => dispatch(getReviewsData()),
});

export const mapStateToProps = (state) => ({
  allReviewsData: state.allReviewsData,
});