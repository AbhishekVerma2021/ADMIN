import { connect } from "react-redux";
import PricingCard from "./PricingCard";
import {
  mapStateToProps,
  mapDispatchToProps,
} from './props';
export default connect(mapStateToProps, mapDispatchToProps)(PricingCard);