
import "../App.css";
function Start({ dispatch , queNum ,max}) {
  return (
    <>
      <div className="startt">
        <div>
          <h3>Welcome to The React Quiz</h3>
          <ul><li> <strong>{queNum} </strong>Total Questions</li>
        <li> <strong>1</strong> Min <strong>15</strong> Sec</li>
      <li>
        
        Best score is <strong>{max}</strong> </li> 
      </ul>
          <button
            className="start-button"
            onClick={()=> dispatch({ type: "start" })}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}
export default Start;
