import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchRooms, showAvailableRooms } from '../../redux/actionCreator';

export const BookRoom = () => {
  const rooms = useSelector((state) => state);
  const [availableRooms, setAvailableRooms] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
    console.log(rooms);
    setAvailableRooms(showAvailableRooms(rooms));
  }, []);

  const bookRoom = (room) => {
    console.log(room);
  };

  return (
    <div>
      Room bookings
      {availableRooms &&
        availableRooms.map((room) => (
          <button onClick={bookRoom(room)}>Book Room</button>
        ))}
    </div>
  );
};
