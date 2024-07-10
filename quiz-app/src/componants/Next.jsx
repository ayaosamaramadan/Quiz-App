import '../App.css';
 function Next({dispatch}) {
  return (
    <button className='btnn' onClick={()=>dispatch({type:"next"})}>Next</button>
  )
}
export default Next;
