import * as actions from './actionTypes';

let bookingId = 0;

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_ROOM:
      return { ...state, rooms: state.rooms.concat(action.payload.room) };
    case actions.BOOK_ROOM:
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.id !== action.payload.id
            ? room
            : room.isAvailable && {
                ...room,
                isAvailable: false,
                bookingId: ++bookingId,
              }
        ),
      };
    case actions.CANCEL_BOOKING:
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.bookingId !== action.payload.bookingId
            ? room
            : {
                ...room,
                isAvailable: true,
                bookingId: null,
              }
        ),
      };
    case actions.FETCH_ROOMS_BEGINS:
      return { ...state, loading: true, error: null };
    case actions.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload.rooms,
      };
    case actions.FETCH_ROOMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        rooms: [],
      };
    default:
      return state;
  }
}
