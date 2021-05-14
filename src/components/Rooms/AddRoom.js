import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom, fetchRooms } from '../../redux/actionCreator';
import roomTypes from './roomTypes';

const initialState = {
  description: '',
  price: 0,
  roomType: '',
};
export const AddRoom = () => {
  const [room, setRoom] = useState(initialState);
  const dispatch = useDispatch();
  const roomState = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchRooms());
    console.log(roomState);
  }, []);

  const { description, price, roomType } = room;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRoom(room));
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };
  return (
    <div>
      Create a room
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={description}
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          type='number'
          placeholder='price'
          name='price'
          value={price}
          onChange={handleChange}
        />
        <label>Type</label>
        <select
          placeholder='Type'
          onChange={handleChange}
          name='roomType'
          value={roomType}
        >
          {roomTypes.map((type, i) => (
            <option value={type} key={i}>
              {type}
            </option>
          ))}
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};
