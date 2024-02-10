import {
  getAllPlans,
} from '../../Redux/action';

export const mapStateToProps = (state) => ({
  allPlansData: state.allPlansData,
});

export const mapDispatchToProps = (dispatch) => ({
  getAllPlans: () => dispatch(getAllPlans()),
});