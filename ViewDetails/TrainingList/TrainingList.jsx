import React from "react";
import { useEffect } from "react";
import useLocalStorage from "../../../../Hooks/useLocalStorage";
import { parseISO, format } from "date-fns";
import { useLocation } from "react-router-dom";
import ViewDetails from "../../ViewDetails/ViewDetails";
import "./TrainingList.css";
import { useState } from "react";
export default function AllTraining() {
  const [selectedTrainings, setSelectedTrainings] = useLocalStorage(
    "selectedTrainings",
    []
  );
  const [matchedTrainings, setMatchedTrainings] = useLocalStorage(
    "matchedTrainings",
    []
  );
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSelectedTrainings(location?.state?.trainings);
    const trainerName = location?.state?.trainerName;
    setMatchedTrainings(
      selectedTrainings.filter((each) => {
        return each.fullname === trainerName;
      })
    );
  }, []);
  // function handleClick(training) {
  //   setIsActive(true);
  //   if (isActive === true) {
  //     <ViewDetails training={training} setIsActive={setIsActive} />;
  //   }
  // }
  return (
    <div>
      <p>Find All Trainings</p>

      {matchedTrainings?.map((training, index) => {
        return (
          <>
            <div key={index} className="each-training">
              <div className="training-content">
                <h1>{training?.trainingType}</h1> by {training?.fullname}
                <p className="mt-0.5">
                  {format(parseISO(training.startTime), "h:mm a")} -{" "}
                  {format(parseISO(training.endTime), "h:mm a")}
                </p>
              </div>
              <button
                className="book"
                onClick={() => {
                  setIsActive(true);
                }}
              >
                View Details
              </button>
              {isActive === true ? (
                <ViewDetails training={training} setIsActive={setIsActive} />
              ) : null}
            </div>
          </>
        );
      })}
    </div>
  );
}
