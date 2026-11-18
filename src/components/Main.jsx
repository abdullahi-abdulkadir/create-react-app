import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";


export const initializeTimes = () => {
  return window.fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return window.fetchAPI(new Date(action.date));
  }
  return state;
};

// useReducer is used here instead of useState because updating available booking times
// depends on complex logic (like checking different dates and calling an API).
// - updateTimes: the reducer function that decides how state changes based on an action
// - initializeTimes: the function that sets the starting array of times
export default function Main() {

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI(formData)) {
      navigate("/confirmed");
    }
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
   <main>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route
      path="/booking"
      element={
        <BookingPage
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      }
    />
    <Route path="/confirmed" element={<ConfirmedBooking />} />
  </Routes>
</main>
  );
}