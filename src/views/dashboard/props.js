import {
  getAllUsers,
  getAllHotels,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getAllHotels: () => dispatch(getAllHotels()),
});

export const mapStateToProps = (state) => ({
  allUsersData: state.allUsersData,
  allHotelsData: state.allHotelsData,
});