import {
  getAllUsers,
  getAllHotels,
  getLine1Data,
  getBarGraphData,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  getAllHotels: () => dispatch(getAllHotels()),
  getLine1Data: () => dispatch(getLine1Data()),
  getBarGraphData: () => dispatch(getBarGraphData()),
});

export const mapStateToProps = (state) => ({
  allUsersData: state.allUsersData,
  barGraphData: state.barGraphData,
  allHotelsData: state.allHotelsData,
  lineChartOneData: state.lineChartOneData,
});