import {
  getUserHotelData,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getUserHotelData: () => dispatch(getUserHotelData()),
});

export const mapStateToProps = (state) => ({
  activeUserDetails: state.activeUserDetails,
  hotelDetailsRedux: state.hotelDetailsRedux,
});