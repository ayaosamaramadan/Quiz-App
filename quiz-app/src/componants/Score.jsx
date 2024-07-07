import "../App.css";
function Score({dispatch, bestScore, points }) {

  return (
    <>
     
      
     <p className="finalscore">Your final score is</p>
     <div className="ponit">{points}</div>
     <p className="finalscore">High Score : {bestScore}</p>
    
    <button onClick={()=>dispatch({type:"reset"})}>🔄 Restart quiz</button>
     </>
  );
}
export default Score;
