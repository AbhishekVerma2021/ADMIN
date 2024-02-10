import {
  getAllHotels,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getAllHotels: () => dispatch(getAllHotels()),
});

export const mapStateToProps = (state) => ({
  allHotelsData: state.allHotelsData,
});