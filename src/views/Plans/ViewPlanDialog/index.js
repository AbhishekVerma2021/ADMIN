import { connect } from "react-redux";
import ViewPlanDialog from "./ViewPlanDialog";
import {
  mapStateToProps,
  mapDispatchToProps,
} from './props';
export default connect(mapStateToProps, mapDispatchToProps)(ViewPlanDialog);