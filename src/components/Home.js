import React from 'react';
import { Link } from 'react-router-dom';
import Rooms from './Rooms/Rooms';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to Hotel Booking</h1>
      <Rooms />
      <Link to='/addRoom'>Create Room</Link>
      <Link to='/bookRoom'>Book Room</Link>
    </div>
  );
};
