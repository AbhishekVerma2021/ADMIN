import {
  getAllHotels,
  getCalls,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getAllHotels: () => dispatch(getAllHotels()),
  getCalls: () => dispatch(getCalls()),
});

export const mapStateToProps = (state) => ({
  allHotelsData: state.allHotelsData,
  allBuisnessCallsData: state.allBuisnessCallsData,
});