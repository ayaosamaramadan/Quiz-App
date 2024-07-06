import "../App.css";
function Score({dispatch, bestScore, points, max }) {
  const per = (points / max) * 100;
  let emoj = "";
  if (per < 50) {
    emoj = "😢";
  }
  if (per >= 50 && per < 75) {
    emoj = "😐";
  }
  if (per >= 75) {
    emoj = "🤩"
  }
  
  return (
    <>
      {/* <p>
        You scored <strong>{points}</strong> out of {max} {Math.ceil(per)}% {emoj}
      </p>
      <p>High Score :{bestScore}</p>
      */}
     <p className="finalscore">Your final score is</p>
     <div className="ponit">{points}</div>
     <p className="finalscore">High Score : {bestScore}</p>
    
    <button onClick={()=>dispatch({type:"reset"})}>🔄 Try Again</button>
     </>
  );
}
export default Score;
