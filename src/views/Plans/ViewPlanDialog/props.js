import {
  modifyPlan,
  editPlanDetails,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  // modifyPlan: (planId, updates) => dispatch(modifyPlan(planId, updates)),
  editPlanDetails: (details) => dispatch(editPlanDetails(details)),
});

export const mapStateToProps = (state) => ({});