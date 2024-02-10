import {
  getUserHotelData,
  deleteHotelData,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getUserHotelData: () => dispatch(getUserHotelData()),
  deleteHotelData: () => dispatch(deleteHotelData()),
});

export const mapStateToProps = (state) => ({
  hotelDetailsRedux: state.hotelDetailsRedux,
});