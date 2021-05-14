import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bookRoom, cancelBooking, fetchRooms } from '../../redux/actionCreator';
import { addToCart } from '../../redux/cartActionCreator';

const initialState = {
  items: [],
};
const Rooms = () => {
  const dispatch = useDispatch();
  const roomState = useSelector((state) => state.hotel.rooms);

  const [cartItems, setCartItems] = useState(initialState);

  useEffect(() => {
    dispatch(fetchRooms());
    console.log(roomState);
  }, []);

  const handleRoomBooking = (room) => {
    setCartItems({ ...cartItems, items: room });
    dispatch(bookRoom(room.id));
  };

  const handleRoomCancel = (id) => {
    dispatch(cancelBooking(id));
  };
  return (
    <div>
      <h1>Hotel Rooms</h1>
      <div>
        {roomState &&
          roomState.map((room) => (
            <div key={room.id}>
              <p>Description:{room.description}</p>
              <p>Rs {room.price}</p>
              <p>Type :{room.type}</p>
              <button
                onClick={() => handleRoomBooking(room)}
                disabled={!room.isAvailable}
              >
                Book Room
              </button>
              <button onClick={() => dispatch(addToCart(room, cartItems))}>
                Add to Cart
              </button>
              <button onClick={() => handleRoomCancel(room.bookingId)}>
                Cancel Booking
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rooms;
