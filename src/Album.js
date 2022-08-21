import "./Album.css";

import Quiz from "./Quiz";
function Album({ image, title, openQuiz, setOpenQuiz, handleQuiz }) {
  return (
    <div className="container" onClick={handleQuiz}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Album;
