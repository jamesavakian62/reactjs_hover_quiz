import { useState } from "react";
import Congrats from "./Congrats";

function Quiz({ setOpenQuiz }) {
  const [input, setInput] = useState("");
  const [prize, setPrize] = useState(false);

  const handleSubmit = () => {
    if (input.toLocaleLowerCase() === "aly") {
      setPrize(true);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#c972e3",
        height: "550px",
        width: "600px",
        backgroundColor: "green",
        borderRadius: "10px",
        position: "absolute",
        top: "20px",
      }}
    >
      <h2
        onClick={() => setOpenQuiz(false)}
        style={{ textAlign: "right", paddingRight: "8px" }}
      >
        X
      </h2>
      <h1>Who is the best wife in the world??</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          borderRadius: "9px",
          width: "200px",
          outline: "none",
          border: "none",
          height: "25px",
          padding: "10px",
        }}
        placeholder="Enter bigboy"
      />
      <button style={{ marginLeft: "10px" }} onClick={handleSubmit}>
        Submit
      </button>
      {prize && <Congrats />}
    </div>
  );
}

export default Quiz;
