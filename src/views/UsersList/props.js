import {
  getReviewsData,
  getAllUsers,
  disableUser,
  enableUser,
  getUserHotelData,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  disableUser: (uid) => dispatch(disableUser(uid)),
  enableUser: (uid) => dispatch(enableUser(uid)),
  getUserHotelData: (uid) => dispatch(getUserHotelData(uid)),
});

export const mapStateToProps = (state) => ({
  allUsersData: state.allUsersData,
  selectedUserHotelData: state.selectedUserHotelData,
});