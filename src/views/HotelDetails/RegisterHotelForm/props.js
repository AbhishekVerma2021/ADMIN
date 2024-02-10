import {
  handleHotelDetails
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  handleHotelDetails: (dataObj) => dispatch(handleHotelDetails(dataObj)),
});

export const mapStateToProps = (state) => ({
  
});