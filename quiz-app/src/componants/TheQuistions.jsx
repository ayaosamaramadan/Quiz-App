import Options from "./Options";
function TheQuistions({queIndex, dispatch, answer ,queNum, question }) {
  return (
    <div className="que">
      <h2>{queIndex+1}/{queNum}</h2>
      <h3>{question.question}</h3>
      <ul>
        <Options answer={answer} dispatch={dispatch} question={question}/>
      </ul>
    </div>
  );
}

export default TheQuistions;
