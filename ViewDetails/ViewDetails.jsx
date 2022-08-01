import React, { useState, useContext } from "react";
import { parseISO, format } from "date-fns";
import "./ViewDetails.css";
import axios from "../../../api/axios";
import AuthContext from "../../context/AuthProvider";

const bookingUrl = "/booking";

export default function ViewDetails({ training, setIsActive }) {
  const { userName, traineeEmail } = useContext(AuthContext);

  const handleBookings = async () => {
    try {
      const trainerName = training.fullname;
      const trainingType = training.trainingType;
      const day = training.day;
      const startTime = training.startTime;
      const endTime = training.endTime;
      const traineeName = userName;

      const response = await axios.post(
        bookingUrl,
        JSON.stringify({
          traineeName,
          traineeEmail,
          trainerName,
          trainingType,
          day,
          startTime,
          endTime,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      alert("Booked!");
    } catch (error) {
      alert("Already Booked!");
    }
  };
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setIsActive(false);
              }}
            >
              X
            </button>
          </div>

          <div className="title">
            <strong>{training?.trainingType}</strong>
          </div>

          <p>{training?.fullname}</p>
          <p>{training?.email}</p>

          <p>{training?.description}</p>
          <p>
            {format(parseISO(training.startTime), "h:mm a")} -{" "}
            {format(parseISO(training.endTime), "h:mm a")}
          </p>

          <div className="footer">
            <button onClick={handleBookings}>Book</button>
          </div>
        </div>
      </div>
    </>
  );
}
