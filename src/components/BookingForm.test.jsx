import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, test, expect, beforeEach } from "vitest";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

test("BookingForm can be submitted by the user", () => {
  const submitForm = vi.fn();
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={submitForm}
    />
  );
  const submitButton = screen.getByDisplayValue("Make Your reservation");
  fireEvent.click(submitButton);
  expect(submitForm).toHaveBeenCalled();
});

describe("Booking times API tests", () => {
  const mockTimes = ["17:00", "18:00", "19:30"];

  beforeEach(() => {
    window.fetchAPI = vi.fn(() => mockTimes);
  });

  test("initializeTimes returns a non-empty array of available times", () => {
    const times = initializeTimes();
    expect(window.fetchAPI).toHaveBeenCalled();
    expect(times.length).toBeGreaterThan(0);
    expect(times).toEqual(mockTimes);
  });

  test("updateTimes returns updated times for a selected date", () => {
    const state = ["17:00"];
    const action = { type: "UPDATE_TIMES", date: "2026-11-20" };
    const newState = updateTimes(state, action);

    expect(window.fetchAPI).toHaveBeenCalled();
    expect(newState).toEqual(mockTimes);
  });
});