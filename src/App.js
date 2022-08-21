import "./App.css";
import { lgObj } from "./objs";
import Album from "./Album";
import { useState } from "react";
import Quiz from "./Quiz";
function App() {
  const [openQuiz, setOpenQuiz] = useState(false);

  const handleQuiz = () => {
    setOpenQuiz(true);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>Sam, please choose your favorite album</h2>
        <p>(choose veeery wisely... or lose it all.)</p>
      </div>
      <div className="albumContainer">
        {lgObj.map((a) => (
          <Album
            handleQuiz={handleQuiz}
            openQuiz={openQuiz}
            setOpenQuiz={setOpenQuiz}
            title={a.title}
            image={a.image}
            key={a.title}
          />
        ))}
      </div>
      {openQuiz && <Quiz setOpenQuiz={setOpenQuiz} />}
    </div>
  );
}

export default App;
