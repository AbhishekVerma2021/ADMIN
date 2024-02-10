import {
  modifyPlan,
  editPlanDetails,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  // modifyPlan: (planId, updates) => dispatch(modifyPlan(planId, updates)),
  editPlanDetails: (details, planId) => dispatch(editPlanDetails(details, planId)),
});

export const mapStateToProps = (state) => ({});