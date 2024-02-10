import { connect } from "react-redux";
import CreateQRDialog from "./CreateQRDialog";
import {
  mapStateToProps,
  mapDispatchToProps,
} from './props';
export default connect(mapStateToProps, mapDispatchToProps)(CreateQRDialog);