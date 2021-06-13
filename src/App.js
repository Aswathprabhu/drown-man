import "./styles.css";
import Leftpane from "./left-pane";
import Rightpane from "./right-pane";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [waterLevel, setWaterLevel] = useState(0);

  const isCorrectAnswer = (value) => {
    return value.toLowerCase() === "chennai";
  };

  const handleAnswerChange = ({ target: { value } }) => {
    if (value) {
      setValue(value);
    }
  };

  const handleAnswerSubmit = () => {
    if (value) {
      let numberOfAttempts = attempts + 1;
      setAttempts(numberOfAttempts);
      if (numberOfAttempts <= 4) {
        if (isCorrectAnswer(value)) {
          alert("Hurray! Correct Answer");
          setWaterLevel(0);
        } else {
          const level = numberOfAttempts * 25;
          setWaterLevel(numberOfAttempts * 25);
          if (level === 100) {
            alert("OOPS! You let him drown");
          }
        }
      }
    }
  };

  return (
    <div className="App">
      <Leftpane waterLevel={waterLevel} />
      <Rightpane onChange={handleAnswerChange} onSubmit={handleAnswerSubmit} />
    </div>
  );
}
