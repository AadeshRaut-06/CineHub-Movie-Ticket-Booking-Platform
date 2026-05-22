import axios from "axios";

const API_URL = "http://localhost:8080/api/bookings";

export const getBookings = () => {
  return axios.get(API_URL);
};

export const createBooking = (booking) => {
  return axios.post(API_URL, booking);
};

export const deleteBooking = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};