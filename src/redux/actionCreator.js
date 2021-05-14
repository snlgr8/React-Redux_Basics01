import roomTypes from '../components/Rooms/roomTypes';
import * as actions from './actionTypes';

let roomId = 0;

export const addRoom = ({ description, price, roomType }) => {
  const room = {
    id: ++roomId,
    description,
    isAvailable: true,
    price,
    roomType,
  };
  return {
    type: actions.ADD_ROOM,
    payload: {
      room,
    },
  };
};

export const bookRoom = (id) => {
  return {
    type: actions.BOOK_ROOM,
    payload: {
      id,
    },
  };
};

export const cancelBooking = (bookingId) => {
  return {
    type: actions.CANCEL_BOOKING,
    payload: {
      bookingId,
    },
  };
};

export const showAvailableRooms = (rooms) => {
  return rooms.filter((room) => room.isAvailable);
};

export function fetchRooms() {
  return (dispatch) => {
    dispatch(fetchRoomsBegin());
    return fakeGetRooms()
      .then((json) => {
        dispatch(fetchRoomsSuccess(json.rooms));
        return json.rooms;
      })
      .catch((error) => dispatch(fetchRoomsFailure(error)));
  };
}
export const fetchRoomsBegin = () => {
  return { type: actions.FETCH_ROOMS_BEGINS };
};

export const fetchRoomsFailure = (error) => {
  return { type: actions.FETCH_ROOMS_FAILURE, payload: { error } };
};

export const fetchRoomsSuccess = (rooms) => {
  return { type: actions.FETCH_ROOMS_SUCCESS, payload: { rooms } };
};

export const countRooms = (rooms, type) => {
  return rooms.filter((room) => room.type === type).length;
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}



function fakeGetRooms() {
  return new Promise((resolve) => {
    // Resolve after a timeout so we can see the loading indicator
    setTimeout(
      () =>
        resolve({
          rooms: [
            {
              id: 1,
              description: 'Lux room',
              price: 1000,
              type: 'LUXURY',
              isAvailable: true,
            },
            {
              id: 2,
              description: 'Standard room',
              price: 400,
              type: 'STANDARD',
              isAvailable: true,
            },
            {
              id: 3,
              description: 'Delux room',
              price: 600,
              type: 'DELUXE',
              isAvailable: true,
            },
            {
              id: 4,
              description: 'Lux room',
              price: 1000,
              type: 'LUXURY',
              isAvailable: true,
            },
          ],
        }),
      1000
    );
  });
}
