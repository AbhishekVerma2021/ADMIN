import { connect } from "react-redux";
import QrCodeSection from "./QrCodeSection";
import {
  mapStateToProps,
  mapDispatchToProps,
} from './props';
export default connect(mapStateToProps, mapDispatchToProps)(QrCodeSection);