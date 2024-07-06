import "../App.css";
function Finish({ dispatch }) {
  return (
    <div>
      <button className='btnn' onClick={() => dispatch({ type: "finished" })}>
      Finish
      </button>
    </div>
  );
}
export default Finish;
