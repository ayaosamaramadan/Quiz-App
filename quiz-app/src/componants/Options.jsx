import "../App.css";
function Options({ question, answer ,dispatch }) {

  return (
    <div className="optionss">
      {question.options.map((option, queIndex) => (
        <button
          key={option}
          disabled={answer !== null}
          className={`Option-btn ${queIndex === answer ? "ans" : ""} ${
            answer !== null
              ? queIndex === question.correctOption
                ? "corr"
                : "wron"
              : ''
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: queIndex })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
